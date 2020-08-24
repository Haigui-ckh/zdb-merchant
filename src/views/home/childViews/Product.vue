<template>
  <div>
    <BackNav>
      <template slot="center-word">产品上架</template>
      <span slot="right-content" @click="handleAddProduct">上架</span>
    </BackNav>
  
    <van-cell is-link @click="sortClick">设置分类</van-cell>
    <van-popup v-model="sortShow" round position="top" :style="{ height: '40%' }">
      <van-field v-model="newSort" placeholder="在此输入新分类">
        <template #button>
          <van-button size="small" type="primary" @click="addNewSort">添加</van-button>
        </template>
      </van-field>
      <div class="sortTagContainer">
        <van-tag 
          closeable 
          size="large" 
          type="primary" 
          v-for="(item,index) in sort" :key="index" 
          @close="deleteSort(index)"
          class="sortTagItem">
          {{item}}
        </van-tag>
      </div>
    </van-popup>

    <Scroll class="prodListScroll">
      <van-card
        v-for="(item,index) in product"
        :key="index"
        :num="item.inventory"
        :price="item.price"
        :desc="item.desc"
        :title="item.name"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        @click="prodItemClick(index)"
      />
    </Scroll>

    <van-popup v-model="addPopupShow" position="right" class="addProdPopup">
      <NewProductPopup @popHandleConfirm="popHandleConfirm" :popStatus="popStatus" :updateProduct="productTemp" :category="sort"></NewProductPopup>
    </van-popup>

  </div>
</template>

<script>
import BackNav from '@/components/content/backnav/BackNav'
import NewProductPopup from './NewProductPopup'
import Scroll from 'components/common/scroll/Scroll'

import { Cell, Field, Popup, Tag, Button, Card, Toast } from 'vant'

export default {
  name: "Product",
  components: {
    BackNav,
    NewProductPopup,
    Scroll,
    [Cell.name]: Cell,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Tag.name]: Tag,
    [Button.name]: Button,
    [Card.name]: Card,
    [Toast.name]: Toast
  },
  data() {
    return {
      sortShow: false,
      sort: ['饮料', '熟食', '炒饭', '特惠', '打折', '套餐'],
      newSort: '',
      addPopupShow: false,
      product: [{ name: '牛肉面', inventory: 10, desc: '好吃的牛肉面', price: 12, saleStatus: true},
                { name: 'Ipad', inventory: 2, desc: '全新的Ipad', price: 4000, saleStatus: true},
                { name: '红豆奶茶', inventory: 12, desc: '甜甜的红豆奶茶', price: 10, saleStatus: true},
                { name: '烧仙草', inventory: 12, desc: '半杯都是料的烧仙草', price: 10, saleStatus: true},
                { name: '章鱼小丸子', inventory: 12, desc: '热乎的小丸子', price: 10, saleStatus: true},
                { name: '重庆小面', inventory: 12, desc: '重庆经典的早餐', price: 6, saleStatus: true},
      ],
      productTemp: {
        name: undefined,
        inventory: undefined,
        desc: undefined,
        price: undefined,
        saleStatus: undefined
      },
      popStatus: ''
    }
  },
  methods: {
    resetTemp() {
      this.productTemp={
        name: undefined,
        inventory: undefined,
        desc: undefined,
        price: undefined,
        saleStatus: undefined
      }
    },
    popHandleConfirm() {
      if (this.popStatus === 'update') {
        // 提交修改
        this.resetTemp()
        Toast({
          message: '修改成功',
          duration: 2000
        })
      }else{
        Toast({
          message: '上新成功',
          duration: 2000
        })
      }
      this.addPopupShow = false
    },
    handleAddProduct() {
      // this.$router.push('/newproduct')
      this.popStatus = 'create'
      this.resetTemp()
      this.addPopupShow = true
    },
    sortClick() {
      this.sortShow = true
    },
    deleteSort(index) {
      this.sort.splice(index,1)
    },
    addNewSort() {
      if (this.newSort !== '') {
        this.sort.push(this.newSort)
        this.newSort = ''
      }

    },
    prodItemClick(index) {
      this.popStatus = 'update'
      this.productTemp = Object.assign({},this.product[index])
      this.addPopupShow = true
      console.log(this.productTemp)
    }
  }
}
</script>

<style scoped>

.sortTagContainer{
  width: 90%;
  margin: 0 auto;
  padding: 10px 10px;
}
.sortTagItem {
  margin-right: 1rem;
  margin-bottom: 1rem ;
}
.addProdPopup {
  width: 80%;
  height: 100%;
}
.prodListScroll {
  position: absolute;
  top: 88px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
}
</style>