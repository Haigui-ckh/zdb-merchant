import axios from 'axios'

function request(config) {

  const instance = axios.create({
    // baseURL: 'https://httpbin.org/',
    // baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
  })

  return instance(config)
}

export default request