import axios from './index.js'

export const apiSearch = (paramsData = {}) => {
  return axios('/search', { method: 'POST', data: paramsData })
}
