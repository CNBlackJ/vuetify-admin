import Api from '@/apis/api'
import listToMap from '@/utils/listToMap'

const orderApi = new Api('orders')

const state = {
  orderList: [],
  orderData: {}
}

const mutations = {
  SET_ORDER_LIST (state, orderList) {
    state.orderList = orderList
  },
  SET_ORDER_DATA (state, orderData) {
    state.orderData = orderData
  }
}

const actions = {
  async getOrderList ({ commit }, payload) {
    const { rows } = await orderApi.list(payload)
    commit('SET_ORDER_LIST', rows)
    commit('SET_ORDER_DATA', listToMap(rows))
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
