import axios from './index.js'

export const apigetAside = (paramsData = {}) => {
  return axios.get('/aside', {
    params: paramsData
  })
}

export const apigetAsideAuthor = (paramsData = {}) => {
  return axios.get('/aside/author', {
    params: paramsData
  })
}
