import Cookies from 'js-cookie'

const tokenKey = 'authToken'

export function getToken (key = '') {
  return Cookies.get(key || tokenKey)
}

export function setToken (token, key = '') {
  return Cookies.set(key || tokenKey, token, { expires: 0.2 })
}

export function removeToken (key = '') {
  return Cookies.remove(key || tokenKey)
}
