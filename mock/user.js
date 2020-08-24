

// const test = '测试成功'
const token = 'merchant-token'
const Info = {
  id: 1,
  name: '鸡公煲'
}

export default {
  'post|/zdb/merchant/login' : option => {
    return{
      status: 200,
      message: 'success',
      data: { token } 
    }
  },
  'get|/zdb/merchant/getInfo' : option => {
    // const { token } = option.params
    console.log(option)
    return {
      status: 200,
      message: 'success',
      data: Info
    }
  }
}