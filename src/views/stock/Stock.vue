<template>
  <div id="stock">
    <main-tab-bar/>
    <NavBar style="background-color: white">
      <template slot="center">库存</template>
    </NavBar>
    <scroll class="stockScroll">
      <div>
        <van-card
          v-for="(item,index) in product"
          :key="index"
          :num="item.inventory"
          :price="item.price"
          :desc="item.desc"
          :title="item.name"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #footer>
            <div class="productSwitch">
              <van-switch v-model="item.saleStatus"  active-color="#07c160" inactive-color="#ee0a24" ></van-switch>
            </div>
            <van-button @click.native="inventoryDecrease(index)" size="small" :disabled="!item.saleStatus">-</van-button>
            <input v-model="item.inventory" type="number" class="inventory-ipt" :disabled="!item.saleStatus">
            <van-button @click.native="inventoryIncrease(index)" size="small" :disabled="!item.saleStatus">+</van-button>
          </template>
        </van-card>
      </div>
    </scroll>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
import NavBar from '@/components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import { Card, Button, Switch } from 'vant'

export default {
  name: "Stock",
  components: {
    MainTabBar,
    NavBar,
    Scroll,
    [Card.name]:Card,
    [Button.name]:Button,
    [Switch.name]: Switch
  },
  data () {
    return {
      product: [{ name: '牛肉面', inventory: 10, desc: '好吃的牛肉面', price: 12, saleStatus: true},
                { name: 'Ipad', inventory: 2, desc: '全新的Ipad', price: 4000, saleStatus: true},
                { name: '红豆奶茶', inventory: 12, desc: '甜甜的红豆奶茶', price: 10, saleStatus: true},
                { name: '烧仙草', inventory: 12, desc: '半杯都是料的烧仙草', price: 10, saleStatus: true},
                { name: '章鱼小丸子', inventory: 12, desc: '热乎的小丸子', price: 10, saleStatus: true},
                ],
      saleStatus: true
    }
  },
  methods: {
    inventoryIncrease(index) {
      this.product[index].inventory++
    },
    inventoryDecrease(index) {
      if (this.product[index].inventory > 0) {
        this.product[index].inventory--
      }
      
    }
  }
}
</script>

<style scoped>
.stockScroll {
  position: absolute;
  bottom: 49px;
  top: 44px;
  right: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}
.inventory-ipt {
  width: 50px;
  height: 25px;
  margin-left: 5px;
}
.productSwitch {
  float: left;
  margin-left: 10px;
}
.productSwitch span{
  vertical-align: middle;
}
</style>