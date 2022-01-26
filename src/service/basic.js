import axios from './index.js'

export const apiSearch = (paramsData = {}) => {
  return axios.post('/search', paramsData)
}
