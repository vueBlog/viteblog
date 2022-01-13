import axios from 'axios'
import { ElMessage } from 'element-plus'

let config = {
  baseURL: `/api${import.meta.env.VITE_pathname}`,
  timeout: 60 * 1000
}

const instance = axios.create(config)

instance.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config
  },
  error => {
    // Do something with request error
    ElMessage({
      message: '网络出错，请重试',
      type: 'error',
      offset: 80
    })
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // Do something with response data
    if (response.status === 200 || response.data.isok) {
      return response.data
    } else {
      if (response.data.msg) {
        let errorMessage = response.data.msg
          ? response.data.msg
          : '网络出错，请重试'
        ElMessage({
          message: errorMessage,
          type: 'error',
          offset: 80
        })
      } else {
        ElMessage({
          message: response.data.error,
          type: 'error',
          offset: 80
        })
      }
    }

    return response
  },
  error => {
    // Do something with response error
    ElMessage({
      message: '网络出错，请重试',
      type: 'error',
      offset: 80
    })
    return Promise.reject(error)
  }
)

export default instance
