import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: "",
    balance: "",
    wallet_list: ""
  },
  mutations: {
    setAccount(state, payload) {
      state.account = payload
    },
    setBalance(state, payload) {
      state.balance = payload
    },
    setWalletList(state, payload) {
      state.wallet_list = payload
    }
  },
  actions: {
    setAccount({ commit }, payload) {
      commit("setAccount", payload)
    },
    setBalance({ commit }, payload) {
      commit("setBalance", payload)
    },
    setWalletList({ commit }, payload) {
      commit("setWalletList", payload)
    }
  },
  getters: {
    account: state => state.account,
    balance: state => state.balance,
    wallet_list: state => state.wallet_list,
  }
})
