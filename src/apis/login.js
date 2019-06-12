import request from '@/utils/request'

export default {
  login: async (payload) => {
    const result = (await request.post('/api/adminUsers/login', payload)).data
    return result
  }
}