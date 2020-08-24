import router from './router/index'
import store from './store'
import { getToken } from '@/utils/auth'


const whiteList = ['/login', '/register'] 


router.beforeEach((to, from, next) => {
  // ${//to and from are Route Object,next() must be called to resolve the hook}
  
  const hasToken = getToken()

  // console.log(hasToken)

  if (hasToken !== undefined) {
    if (to.path === '/login') {
      next({ path:'/home' })
    }
    else {
      // 获取商户信息
      const res = store.dispatch('user/getInfo')
      next()
    }
  } else {
    // 重定向到登录界面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    }
    else{
      // next({ name: 'login' })
      next(`/login?redirect=${to.path}`)
    }

  }
})




