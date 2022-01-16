import axios from './index.js'

export const apigetAside = (paramsData = {}) => {
  return axios('/aside', { method: 'get', params: paramsData })
}

export const apigetAsideAuthor = (paramsData = {}) => {
  return axios('/aside/author', { method: 'get', params: paramsData })
}
