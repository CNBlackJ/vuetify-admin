import Api from '@/apis/api'
import listToMap from '@/utils/listToMap'

const priceApi = new Api('prices')

const state = {
  priceList: [],
  priceData: {},
  dataTypeMap: {
    'string': '文本',
    'number': '数字'
  }
}

const mutations = {
  SET_PRICE_LIST (state, priceList) {
    state.priceList = priceList
  },
  SET_PRICE_DATA (state, priceData) {
    state.priceData = priceData
  }
}

const actions = {
  async getPriceList ({ commit }, payload) {
    const { rows } = await priceApi.list(payload)
    commit('SET_PRICE_LIST', rows)
    commit('SET_PRICE_DATA', listToMap(rows))
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
