import { inquiryApi } from '@/apis'

import listToMap from '@/utils/listToMap'

const state = {
  inquiryList: [],
  inquiryData: {}
}

const mutations = {
  SET_INQUIRY_LIST (state, inquiryList) {
    state.inquiryList = inquiryList
  },
  SET_INQUIRY_DATA (state, inquiryData) {
    state.inquiryData = inquiryData
  }
}

const actions = {
  async getInquiryList ({ commit }, payload) {
    const { rows } = await inquiryApi.list(payload)
    commit('SET_INQUIRY_LIST', rows)
    commit('SET_INQUIRY_DATA', listToMap(rows))
  },
  async getInquiry (_, id) {
    const result = await inquiryApi.get(id)
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
