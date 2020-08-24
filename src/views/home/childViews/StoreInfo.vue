<template>
  <div>
    <BackNav>
      <template slot="center-word">店铺信息</template>
      <span slot="right-content" @click="handlePreserve" style="color:orange">保存</span>
    </BackNav>

    <van-cell value="点击头像上传" center class="storeAvaterContainer">
      <template #title class="storeAvaterlHead">
        <van-uploader class="storeAvater" :after-read="uploadAvater">
        <!-- <van-uploader v-model="storeInfo.fileList" class="storeAvater"> -->
          <img src="~assets/img/common/tx1.jpg" class="storeAvater">
          <!-- <img :src="storeInfo.fileList[0].url" class="storeAvater"> -->
        </van-uploader>
      </template>
    </van-cell>
    <van-field v-model="storeInfo.name" label="店名" placeholder="在此输入店名"></van-field>
    <van-field v-model="storeInfo.description" label="简介" placeholder="在此输入简介" type="textarea" rows="2" autosize></van-field>
    <van-field v-model="storeInfo.tel" label="客服电话" placeholder="在此输入电话" type="tel"></van-field>
    <van-field v-model="storeInfo.address" label="店铺地址" placeholder="在此输入地址"></van-field>
    <van-cell-group title="营业状态">
      <van-cell :title="businessStatusTitle" :class="[storeInfo.businessStatus?'successTip':'dangerTip']">
        <template #right-icon>
          <van-switch v-model="storeInfo.businessStatus" size="24" active-color="#07c160" inactive-color="#ee0a24"/>
        </template>
      </van-cell>
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="storeInfo.startTime"
        label="开始营业时间"
        placeholder="点击选择时间"
        @click="chooseStart"
      />
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="storeInfo.endTime"
        label="结束营业时间"
        placeholder="点击选择时间"
        @click="chooseEnd"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-datetime-picker
          type="time"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
    </van-cell-group>
    <van-field v-model="storeInfo.notice" label="店铺公告" placeholder="在此输入公告" type="textarea" rows="2" autosize></van-field>
    <van-field v-model="storeInfo.sendtime" label="配送时间" >
      <template #button>
        <span>分钟</span>
      </template>
    </van-field>
  </div>
</template>

<script>
import BackNav from '@/components/content/backnav/BackNav'
import { Cell, Tag, Uploader, Field, CellGroup, Switch, Popup, DatetimePicker } from 'vant'

export default {
  name: "StoreInfo",
  components: {
    BackNav,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Tag.name]: Tag,
    [Uploader.name]: Uploader,
    [Field.name]: Field,
    [Switch.name]: Switch,
    [Popup.name]: Popup,
    [DatetimePicker.name]: DatetimePicker
  },
  data() {
    return {
      storeInfo: {
        fileList: [
          {url:'img/tx1.jpg'}
        ],
        name: '小龙坎',
        description: '味道很好的火锅店',
        tel: '6485475',
        address: '重庆市小龙坎',
        businessStatus: true,
        startTime: '06:00',
        endTime: '20:00',
        notice: '可选',
        sendtime: ''
      },
      showPicker: false,
      timeChoose: ''
      
    }
  },
  computed: {
    businessStatusTitle() {
      if (this.storeInfo.businessStatus) {
        return '正常营业'
      }else{
        return '暂停营业'
      }
    }
  },
  methods: {
    onConfirm(time) {
      if (this.timeChoose === 'start') {
        this.storeInfo.startTime = time;
      }else{
        this.storeInfo.endTime = time;
      }
      this.showPicker = false;
    },
    chooseStart() {
      this.timeChoose = 'start'
      this.showPicker = true;
    },
    chooseEnd() {
      this.timeChoose = 'end'
      this.showPicker = true;
    },
    handlePreserve() {
      // this.storeInfo上传
      
    },
    uploadAvater(file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>
.storeAvaterContainer {
  height: 120px;
}
.storeAvater {
  height: 80px;
  vertical-align: middle;
}
.successTip {
  color: green;
}
.dangerTip {
  color: red;
}
</style>