import { default as loginApi } from '@/apis/login'

const state = {
  userInfo: {}
}

const mutations = {
  SET_USER_INFO (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  async login (_, payload) {
    const resp = await loginApi.login(payload)
    return resp
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
