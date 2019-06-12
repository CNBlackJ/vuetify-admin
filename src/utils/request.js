import axios from 'axios'
import { getToken } from './auth'

const baseURL = process.env.VUE_APP_API_BASE_URL

const request = axios.create({
  baseURL,
  timeout: 1500
})

request.interceptors.request.use(config => {
  const authToken = getToken()
  config.headers['Authorization'] = `Bearer ${authToken}`
  return config
}, error => {
  Promise.reject(error)
})


export default request