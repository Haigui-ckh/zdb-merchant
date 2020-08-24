import Vue from 'vue'
import VueRouter from 'vue-router'


const Register = () => import('../views/register/Register')
const Login = () => import('../views/login/Login')
const Home = () => import('views/home/Home')
const Stock = () => import('views/stock/Stock')
const Order = () => import('views/order/Order')

// const MainTabBar = () => import('@/components/content/maintabbar/MainTabBar')

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      redirect: '/login'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      name: 'login',
      path:'/login',
      component: Login
    },
    {
      path:'/home',
      component: Home
    },
    {
      path: '/storeinfo',
      component: () => import('views/home/childViews/StoreInfo')
    },
    {
      path: '/storesetting',
      component: () => import('views/home/childViews/StoreSetting')
    },
    {
      path: '/product',
      component: () => import('views/home/childViews/Product')
    },
    {
      path: '/newproduct',
      component: () => import('views/home/childViews/NewProduct')
    },
    {
      path:'/stock',
      component: Stock
    },
    {
      path: '/order',
      component: Order
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
