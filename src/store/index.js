import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      logoText: import.meta.env.VITE_title || '',
      logoDescription: import.meta.env.VITE_description || ''
    }
  },
  getters: {},
  mutations: {},
  actions: {}
})

export default store
