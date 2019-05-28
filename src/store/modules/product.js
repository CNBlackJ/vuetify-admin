import { productApi } from '@/apis'

import listToMap from '@/utils/listToMap'

const state = {
  productList: [],
  productData: {}
}

const mutations = {
  SET_PRODUCT_LIST (state, productList) {
    state.productList = productList
  },
  SET_PRODUCT_DATA (state, productData) {
    state.productData = productData
  }
}

const actions = {
  async getProductList ({ commit }, payload) {
    const { rows } = await productApi.list(payload)
    commit('SET_PRODUCT_LIST', rows)
    commit('SET_PRODUCT_DATA', listToMap(rows))
  },
  async getProduct (_, id) {
    const result = await productApi.get(id)
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
