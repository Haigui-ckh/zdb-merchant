<template>
<div class="app-container">
  <div id="register">
    <link href='http://fonts.font.im/css?family=Arvo:700,400italic' rel='stylesheet' type='text/css'>
    <!-- <h1 id="register-title">整点巴</h1> -->
    <h2 id="register-title">商家注册</h2>
    <van-form>
      <van-field
        v-model="merchantTel"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        type="tel"
        :rules="[{ required: true, message: '请输入手机号' , trigger : 'onBlur'}]"
      >
      </van-field>

      <van-field
        v-model="verifyCode"
        name="手机号"
        label="验证码"
        placeholder="请输入验证码"
        :rules="[{ required: true, message: '请输入验证码' , trigger : 'onBlur'}]"
      >
        <template #button>
          <van-button size="small" type="primary" 
            @click="getVerificationCode" 
            :disabled="verifyBtnStatus"
            >获取</van-button>
        </template>
      </van-field>

      <van-field
        v-model="userpwd"
        name="密码"
        label="密码"
        placeholder="密码"
        type="password"
        :rules="[{ required: true, message: '请填写用户名' , trigger : 'onBlur'}]"
      />
      <van-field
        v-model="userpwd"
        name="密码"
        label="再次输入密码"
        placeholder="请再次输入密码"
        type="password"
        :rules="[{ required: true, message: '请再次输入密码' , trigger : 'onBlur'}]"
      />
    </van-form>
    <p><van-button type="warning" class="register-btn" @click="handleRegister">注册</van-button></p>

    <!-- <p><input placeholder="请输入手机号"></p>
      <p><input type="password" placeholder="输入密码"></p>
      <p><input type="password" placeholder="再次输入密码"></p>
      <p>
        <input class="verification-code-ipt" placeholder="输入验证码">
        <button class="verification-code-btn" @click="btnClick">获取</button>
      </p>
    <p><button class="register-btn">注册</button></p> -->
    <a href="#" class="jump" @click="jumptoLogin">已注册？点此登录</a>
  </div>
</div>

</template>

<script>
import { Form, Field, Button } from 'vant'

export default {
  name: "Register",
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  data() {
    return{
      username: '',
      userpwd: '',
      merchantTel: '',
      verifyCode: '',
      verifyBtnStatus: false
    }
  },
  methods: {
    btnClick() {
      console.log('点击按钮')
    },
    jumptoLogin() {
      this.$router.replace('/login')
    },
    getVerificationCode() {
      // 发送手机号
    },
    handleRegister() {

    }
  }
}
</script>

<style scoped>

  #register {
    width: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    z-index: 9;
    border-radius: 8px;
  }
  #register p input{
    width: 200px;
    height: 32px;
    border-radius: 6px;
    border:1px solid var(--color-theme);
    box-sizing: border-box;
    text-align: center;
    font-size: 12px;
  }
  .verification-code-ipt {
    width: 120px !important;
  }
  .verification-code-btn {
    width: 70px;
    height: 32px;
    margin-left: 4px;
    font-size: 10px;
    border: 1px solid var(--color-theme);
    border-radius: 6px;
    background:#ffcc33;
  }
  .register-btn {
    width: 200px;
    height: 32px;
    border:1px solid var(--color-theme) ;
    border-radius: 6px;
    background-color:#ffcc99 ;
    color: white;
  }
  .jump {
    margin-top: 10px;
    text-decoration: none;
    font-size: 14px;
  }
</style>