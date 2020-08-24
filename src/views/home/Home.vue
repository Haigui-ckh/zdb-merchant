<template>
  <div id="home">
    <main-tab-bar/>
    <NavBar>
      <template slot="center">首页</template>
    </NavBar>
    <van-cell-group >
      <van-cell title="店铺信息" is-link to="/storeinfo"/>
      <van-cell title="店铺设置" is-link to="/storesetting"/>
      <van-cell title="产品上架" is-link to="/product"/>
      <van-cell title="打包费" class="packingfeeCell" center>
        <template #right-icon>
          <input class="packingfeeInput" v-if="packingfeeStatus" type="number" placeholder="输入打包费">
          <van-switch v-model="packingfeeStatus"></van-switch>
        </template>
      </van-cell>
    </van-cell-group>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
import NavBar from '@/components/common/navbar/NavBar'
import { Cell, CellGroup, Switch } from 'vant'

export default {
  name: "home",
  components: {
    MainTabBar,
    NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Switch.name]: Switch
  },
  data () {
    return {
      packingfeeStatus: false
    }
  }
}
</script>

<style scoped>
.packingfeeInput {
  width: 80px;
  font-size: 12px;
}
</style>