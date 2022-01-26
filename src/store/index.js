import { createStore } from 'vuex'
import asideStore from './asideStore'

const store = createStore({
  state() {
    return {
      logoText: import.meta.env.VITE_title || '',
      logoDescription: import.meta.env.VITE_description || ''
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    asideStore
  }
})

export default store
