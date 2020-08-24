import { login, getInfo } from '@/api/user'
import { setToken } from '@/utils/auth'
// import { resolve, reject } from 'core-js/fn/promise'

const state = {
  token: '',
  name: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  // 商家login
  login({ commit }, userInfo) {
    const { tel, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ tel: tel, password: password }).then(res => {
        const { data } = res.data
        // console.log(data.token)
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(res => {
        const { data } = res


        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}