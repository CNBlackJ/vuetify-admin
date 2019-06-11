import request from '@/utils/request'
import querystring from 'querystring'

class Api {
  constructor (resource) {
    this.resource = resource
  }

  async list (payload) {
    const result = (await request.get(`/api/${this.resource}?${querystring.stringify(payload)}`)).data
    return result.code === 200 ? result.data : {}
  }
  async get (id) {
    const result = (await request.get(`/api/${this.resource}/${id}`)).data
    return result.code === 200 ? result.data : {}
  }
  async create () {
    return {}
  }
  async update (id, payload) {
    const result = (await request.put(`/api/${this.resource}/${id}`, payload)).data
    return result.code === 200 ? result.data : {}
  }
  async delete (id) {
    const result = (await request.delete(`/api/${this.resource}/${id}`)).data
    return result
  }
}

export default Api
