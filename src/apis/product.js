import request from '@/utils/request'
import querystring from 'querystring'

export default {
  list: async (payload) => {
    const result = (await request.get(`/api/products?${querystring.stringify(payload)}`)).data
    return result.code === 200 ? result.data : {}
  },
  get: async (id) => {
    const result = (await request.get(`/api/products/${id}`)).data
    return result.code === 200 ? result.data : {}
  },
  create: async () => {
    return {}
  },
  update: async (id, payload) => {
    const result = (await request.put(`/api/products/${id}`, payload)).data
    return result.code === 200 ? result.data : {}
  },
  delete: async (id) => {
    const result = (await request.delete(`/api/products/${id}`)).data
    return result
  }
}