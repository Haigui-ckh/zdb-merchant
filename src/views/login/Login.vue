<template>
<div class="app-container">
  <div id="login">
    <h1 id="login-title">整点巴</h1>
    <h2 id="login-title">商家登录</h2>
    <form>
      <input placeholder="输入手机号" v-model="merchantInfo.tel">
      <input type="password" placeholder="输入密码" v-model="merchantInfo.password">
    </form>

    <p><button class="login-btn" @click="Login">登录</button></p>
    <a href="#" class="jump" @click="jumptoRegister">还没有注册？</a>
  </div>
</div>

</template>

<script>
import request from '@/network/request'

export default {
  name: "Login",
  data() {
    return{
      merchantInfo: {
        tel: '',
        password: ''
      }

    }
  },
  methods: {
    jumptoRegister() {
      this.$router.replace('/register')
    },
    Login() {
      console.log('登录')

      this.$store.dispatch('user/login', this.merchantInfo).then(() => {
        this.$router.replace('/home') //登录成功重定向
      }).catch(err => {
        this.$message.error(err); //登录失败提示错误
      })


      // request({
      //   url: 'headers'
      // }).then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
      
    }
  }
}
</script>

<style scoped>
  #login {
    width: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }
  #login input {
    width: 200px;
    height: 32px;
    border-radius: 6px;
    border:1px solid var(--color-theme);
    box-sizing: border-box;
    text-align: center;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .login-btn {
    width: 200px;
    height: 32px;
    border:1px solid var(--color-theme) ;
    border-radius: 6px;
    background-color:#ffcc99 ;
    color: white;
  }
  .jump {
    text-decoration: none;
    font-size: 14px;
  }
</style>