import request from '@/utils/request'
import querystring from 'querystring'

export default {
  list: async (payload) => {
    const result = (await request.get(`/api/adminUsers?${querystring.stringify(payload)}`)).data
    return result.code === 200 ? result.data : {}
  },
  create: async () => {
    return {}
  },
  update: async (id, payload) => {
    const result = (await request.put(`/api/adminUsers/${id}`, payload)).data
    return result.code === 200 ? result.data : {}
  },
  delete: async (id) => {
    const result = (await request.delete(`/api/adminUsers/${id}`)).data
    return result
  }
}