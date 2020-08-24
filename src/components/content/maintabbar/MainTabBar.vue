<template>
  <tab-bar>
      <tab-bar-item link="/home" activeColor="orange">
        <img slot="item-icon" src="~assets/img/maintabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/maintabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/stock" activeColor="orange">
        <img slot="item-icon" src="~assets/img/maintabbar/stock.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/maintabbar/stock_active.svg" alt="">
        <div slot="item-text">库存</div>
      </tab-bar-item>
      <tab-bar-item link="/order" activeColor="orange">
        <img slot="item-icon" src="~assets/img/maintabbar/order.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/maintabbar/order_active.svg" alt="">
        <div slot="item-text">订单</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default {
    name: 'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
</style>