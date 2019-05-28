import axios from 'axios'

const baseURL = process.env.VUE_APP_API_BASE_URL

const request = axios.create({
  baseURL,
  timeout: 1500
})

export default request