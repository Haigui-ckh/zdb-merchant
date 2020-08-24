<template>
  <div>
    <NavBar class="newProdNav">
      <template slot="center">新增商品</template>
      <span slot="right" style="color: orange" @click="handleConfirm">确定</span>
    </NavBar>
    <div class="newProdScroll">
      <!-- <Scroll class="newProdScroll"> -->
      <van-field v-model="updateProduct.name" label="商品名称" placeholder="在此输入商品名称"></van-field>
      <van-field v-model="updateProduct.price" label="现价" placeholder="在此输入现价"></van-field>
      <van-field v-model="updateProduct.packingfee" label="打包费" placeholder="在此输入打包费"></van-field>
      <van-cell title="库存" center>
        <template #right-icon>
          <div class="stockAction">
            <van-button class="stockActionBtn" @click="inventoryDecrease">-</van-button>
            <input v-model="updateProduct.inventory" type="number">
            <van-button class="stockActionBtn" @click="inventoryIncrease">+</van-button>
          </div>
        </template>
      </van-cell>
      <van-cell title="商品图片上传"></van-cell>
      <div class="productPicture">
        <van-uploader v-model="fileList" multiple />
      </div>
      <van-field v-model="product.details" label="详情" placeholder="在此输入详情" type="textarea" autosize=""></van-field>
      <van-field
        readonly
        clickable
        label="类别"
        placeholder="点击选择商品类别"
        :value="product.sort"
        @click="sortShow = true"
      />

      <div class="productSpecifications">
        <input v-model="spec.name" class="productSpecifications-ipt" placeholder="规格">
        <input v-model="spec.price" class="specificationsPrice" placeholder="加价" type="number">
        <van-button size="small" @click="handleAddSpec">添加规格</van-button>
      </div>
      <van-swipe-cell v-for="(item, index) in product.specifications" :key="index">
        <van-cell :title="item.name" :value="item.price"></van-cell>
        <template #right>
          <van-button square type="danger" text="删除" @click="handleDelSpec(index)"/>
        </template>
      </van-swipe-cell>
      <!-- </Scroll> -->
    </div>
    <van-popup v-model="sortShow" style="width: 60%" position="right">
      <van-picker 
        show-toolbar
        :columns="category"
        @confirm="sortChooseConfirm"
        @cancel="sortShow = false"
      />
    </van-popup>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import BackNav from '@/components/content/backnav/BackNav'
import { Field, Cell, Button, Uploader, SwipeCell, Popup, Picker } from 'vant'


export default {
  name: "NewProduct",
  components: {
    NavBar,
    Scroll,
    BackNav,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [Button.name]: Button,
    [Uploader.name]: Uploader,
    [SwipeCell.name]: SwipeCell,
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },
  props: {
    popStatus: String,
    category: Array,
    updateProduct: Object,
  },
  data() {
    return {
      product:{
        name: '',
        price: '',
        packingfee: '',
        inventory: 0,
        details: '',
        sort:'',
        specifications: [ { name: '大份', price: 2 }, { name: '中份', price: 1 }, { name: '小份', price: 0 }, ]
      },
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      ],
      spec: {
        name: '',
        price: ''
      },
      sortShow: false
    }
  },
  methods: {
    handleConfirm() {
      // 提交数据
      // this.$router.go(-1)
      this.$emit('popHandleConfirm')
      this.product = {
        name: '',
        price: '',
        packingfee: '',
        inventory: 0,
        details: '',
        specifications: [ { name: '大份', price: 2 }, { name: '中份', price: 1 }, { name: '小份', price: 0 }, ]
      }
    },
    inventoryIncrease() {
      this.product.inventory++
    },
    inventoryDecrease() {
      if (this.product.inventory > 0) {
        this.product.inventory--
      }
      
    },
    handleDelSpec(index) {
      this.product.specifications.splice(index,1)
    },
    handleAddSpec() {
      if (this.spec.name !== '') {
        this.product.specifications.push(this.spec)
        this.spec = {
          name: '',
          price: ''
        }
      }

    },
    sortChooseConfirm(value) {
      this.product.sort = value
      this.sortShow = false
    }
  }
}
</script>

<style scoped>
.newProdNav {
  background-color: white ;
}
.newProdScroll {
  position: absolute;
  top: 44px;
  bottom: 0;
  right: 0;
  left: 0;
  /* z-index: -1; */
  overflow-y: auto;
  
}
.stockAction input{
  width: 50px;
}
.stockActionBtn{
  height: 32px;
  width: 32px;
  background-color: #f2f2f2;
}
.productPicture {
  display:flex;
  padding-left: 15px ;
}
.productSpecifications {
  text-align: center;
  margin-top: 15px;
}
.productSpecifications input{
  font-size: 14px;
  height: 27px;
}
.productSpecifications-ipt {
  width: 50%;
}
.specificationsPrice {
  width: 20%;
}
</style>