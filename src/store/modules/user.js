import Api from '@/apis/api'
import listToMap from '@/utils/listToMap'

const userApi = new Api('adminUsers')

const state = {
  userList: [],
  userData: {}
}

const mutations = {
  SET_USER_LIST (state, userList) {
    state.userList = userList
  },
  SET_USER_DATA (state, userData) {
    state.userData = userData
  }
}

const actions = {
  async getUserList ({ commit }, payload) {
    const { rows } = await userApi.list(payload)
    commit('SET_USER_LIST', rows)
    commit('SET_USER_DATA', listToMap(rows))
  },
  async getUser (_, id) {
    const result = await userApi.get(id)
    return result
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
