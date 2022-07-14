import request from '@/network/request'

//测试
export function login(data) {
  return request({
    url: '/zdb/merchant/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/zdb/merchant/getInfo',
    method: 'get',
    params: { 'token': token }
  })
}