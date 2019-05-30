import Api from '@/apis/api'
import listToMap from '@/utils/listToMap'

const categoryApi = new Api('categories')

const state = {
  categoryList: [],
  categoryData: {}
}

const mutations = {
  SET_CATEGORY_LIST (state, categoryList) {
    state.categoryList = categoryList
  },
  SET_CATEGORY_DATA (state, categoryData) {
    state.categoryData = categoryData
  }
}

const actions = {
  async getCategoryList ({ commit }, payload) {
    const rows = await categoryApi.list(payload)
    commit('SET_CATEGORY_LIST', rows)
    commit('SET_CATEGORY_DATA', listToMap(rows))
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
