<template>
  <div id="storeSetting">
    <BackNav>
      <template slot="center-word">店铺设置</template>
    </BackNav>
    <van-form>
      <van-field
        v-model="merchantInfo.tel"
        label="手机号"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="merchantInfo.password"
        :type="pwdVisible?'password':'text'"
        label="密码"
        placeholder="密码"
        center=""
        :rules="[{ required: true, message: '请填写密码' }]"
      >
        <template #button>
          <van-icon name="closed-eye" @click="pwdVisible = !pwdVisible"/>
          <van-button size="small" style="margin-left:10px">重置</van-button>
        </template>
      </van-field>
    </van-form>
    <van-field 
      readonly
      clickable
      :value="merchantInfo.businessStyle"
      placeholder="点击选择经营方式"
      @click="showStylePop = true"
      label="经营方式">
    </van-field>

    <van-field label="起送价" v-model="merchantInfo.startPrice" placeholder="输入起送价"/>

    <van-popup v-model="showStylePop" position="bottom">
      <van-picker
        show-toolbar
        :columns="['配送上门', '到店自取', '全部']"
        @confirm="styleConfirm"
        @cancel="showStylePop = false">
      </van-picker>
    </van-popup>
  </div>
</template>

<script>
import BackNav from '@/components/content/backnav/BackNav'
import { Form, Field, Icon, Button, Popup, Picker } from 'vant'


export default {
  name: "StoreSetting",
  components: {
    BackNav,
    [Form.name]: Form,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },
  data() {
    return {
      merchantInfo: {
        tel: '15487596544',
        password: '1452189',
        businessStyle: '',
        startPrice: 14
      },
      pwdVisible: true,
      businessStyle: ['配送上门', '到店自取', '全部'],
      showStylePop: false
    }
  },
  methods: {
    styleConfirm(value,index) {
      this.merchantInfo.businessStyle = value
      this.showStylePop = false
    }
  }
}
</script>

<style scoped>
</style>