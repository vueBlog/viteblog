import axios from './index.js'

export const apiArticleList = (paramsData = {}) => {
  return axios.get('/articleList', {
    params: paramsData
  })
}

export const apiColumnDetail = (paramsData = {}) => {
  return axios.get('/column/detail', {
    params: paramsData
  })
}
