<template>
  <div id="order">
    <main-tab-bar/>
    <NavBar style="background-color:white">
      <template slot="center">订单中心</template>
    </NavBar>

    <Scroll class="orderScroll">
      <div class="orderSummaryContainer">
        <!-- <div class="orderSummaryRow1"> -->
          <div class="orderSummaryItem1 totalOrderTitle">总订单</div>
          <div class="orderSummaryItem1 totalOrderContent">
            <div class="orderNums">{{merchantOrderSummary.orderNums}} 单</div>
            <div class="orderPrice">{{merchantOrderSummary.orderTotalPrice}} 元</div>
          </div>
        <!-- </div> -->

        <!-- <div class="orderSummaryRow2"> -->
          <div class="orderSummaryItem2">
            <p>撤退款</p> 
            <p>￥ {{merchantOrderSummary.refund}}</p>
          </div>
          <div class="orderSummaryItem2">
            <p>已提现</p> 
            <p>￥ {{merchantOrderSummary.cashout}}</p>
          </div>
          <div class="orderSummaryItem2">
            <p>待提现</p> 
            <p>￥ {{merchantOrderSummary.waitcashout}}</p>
          </div>
        <!-- </div> -->
      </div>

      <van-tabs v-model="activeTab" color="orange">
        <van-tab title="未受理">
          <div class="orderItem" v-for="(item, index) in orderList" :key="index">
            <div class="order-item-head">
              <div class="orderID">订单号：{{item.id}}</div>
              <div class="orderTime">{{item.time}}</div>
            </div>
  
            <div class="order-item-prod-th">
              <div style="flex: 6">品名</div>
              <div style="flex: 1.5">数量</div>
              <div style="flex: 1.5">单价</div>
            </div>
            <table class="order-item-prod">
              <tr v-for="(prod, index) in item.prods" :key="index">
                <td>{{prod.prodname}}</td> <td width="15%">{{prod.prodnums}}</td> <td width="15%">{{prod.prodprice}}</td>
              </tr>
            </table>

            <div class="order-item-content">
              <div>
                <span>总计：</span>
                <span>￥{{item.totalprice}}</span>
              </div>
              <div>
                <span>客户：</span>
                <span>{{item.username}}</span>
              </div>
              <div>
                <span>电话：</span>
                <span>{{item.usertel}}</span>
              </div>
              <div>
                <span>配送：</span>
                <span>{{item.address}}</span>
              </div>
              <div v-if="item.remarks">
                <span>备注：</span>
                <span>{{item.remarks}}</span>
              </div>
            </div>
            <div class="order-item-operate">
              <van-button size="small" type="primary">受理</van-button>
              <!-- <van-button size="small">配送</van-button> -->
            </div>

          </div>
          <!-- <div class="orderItem">
            <div class="order-item-head">
              <div class="orderID">订单号：1114521</div>
              <div class="orderTime">6/20 14:45</div>
            </div>
  
            <div class="order-item-prod-th">
              <div style="flex: 6">品名</div>
              <div style="flex: 1.5">数量</div>
              <div style="flex: 1.5">单价</div>
            </div>
            <table class="order-item-prod">
              <tr>
                <td>西瓜</td> <td width="15%">3</td> <td width="15%">5</td>
              </tr>
              <tr>
                <td>西瓜</td> <td width="15%">3</td> <td width="15%">5</td>
              </tr>
            </table>



            <div class="order-item-content">
              <div>
                <span>总计：</span>
                <span>￥6.6</span>
              </div>
              <div>
                <span>客户：</span>
                <span>￥6.6</span>
              </div>
              <div>
                <span>电话：</span>
                <span>￥6.6</span>
              </div>
              <div>
                <span>配送：</span>
                <span>￥6.6</span>
              </div>
              <div>
                <span>备注：</span>
                <span>￥6.6</span>
              </div>
            </div>
            <div>
              <van-button size="small">受理</van-button>
              <van-button size="small">配送</van-button>
            </div>
          </div> -->
        </van-tab>
        <van-tab title="全部订单">
          <div class="orderItem" v-for="(item, index) in orderList" :key="index">
            <div class="order-item-head">
              <div class="orderID">订单号：{{item.id}}</div>
              <div class="orderTime">{{item.time}}</div>
            </div>
  
            <div class="order-item-prod-th">
              <div style="flex: 6">品名</div>
              <div style="flex: 1.5">数量</div>
              <div style="flex: 1.5">单价</div>
            </div>
            <table class="order-item-prod">
              <tr v-for="(prod, index) in item.prods" :key="index">
                <td>{{prod.prodname}}</td> <td width="15%">{{prod.prodnums}}</td> <td width="15%">{{prod.prodprice}}</td>
              </tr>
            </table>

            <div class="order-item-content">
              <div>
                <span>总计：</span>
                <span>￥{{item.totalprice}}</span>
              </div>
              <div>
                <span>客户：</span>
                <span>{{item.username}}</span>
              </div>
              <div>
                <span>电话：</span>
                <span>{{item.usertel}}</span>
              </div>
              <div>
                <span>配送：</span>
                <span>{{item.address}}</span>
              </div>
              <div v-if="item.remarks">
                <span>备注：</span>
                <span>{{item.remarks}}</span>
              </div>
            </div>
            <div class="order-item-operate">
              <!-- <van-button size="small" type="primary">附言</van-button> -->
              <van-button size="small">打印</van-button>
            </div>

          </div>
        </van-tab>
      </van-tabs>
    </Scroll>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
import NavBar from '@/components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import { Tabs, Tab, Button } from 'vant'


export default {
  name: "Order",
  components: {
    MainTabBar,
    NavBar,
    Scroll,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Button.name]: Button
  },
  data() {
    return {
      activeTab: 0,
      merchantOrderSummary: {
        orderNums: 59,
        orderTotalPrice: 500,
        refund: 10,
        cashout: 290,
        waitcashout: 10
      },
      orderList:[  
        { id: "1114521", time: '6/20 14:45', remarks:'可能没有' ,
          prods: [ 
            {prodname: '西瓜', prodnums: 3, prodprice: 5}, 
            {prodname: '香肠', prodnums: 2, prodprice: 3}, 
            {prodname: '可乐', prodnums: 1, prodprice: 3}, 
          ], 
          totalprice: 6.6, username: '张艺兴', usertel: '14587596523', address: '重庆市-重庆科创职业学院'
        },
        { id: "1485654", time: '6/20 15:00', remarks:'没有' ,
          prods: [ 
            {prodname: '大米', prodnums: 3, prodprice: 5}, 
            {prodname: '小面', prodnums: 2, prodprice: 3}, 
            {prodname: '可乐', prodnums: 1, prodprice: 3}, 
          ], 
          totalprice: 6.6, username: '古力娜扎', usertel: '18745966542', address: '重庆市-重庆科创职业学院'
        },
        { id: "1598746", time: '6/20 17:55', 
          prods: [ 
            {prodname: '西瓜', prodnums: 3, prodprice: 5}, 
            {prodname: '香肠', prodnums: 2, prodprice: 3}, 
            {prodname: '可乐', prodnums: 1, prodprice: 3}, 
          ], 
          totalprice: 6.6, username: '黄渤', usertel: '14587596523', address: '重庆市-重庆科创职业学院'
        },
          
      ]
    }
  }
}
</script>

<style scoped>
.orderScroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  z-index: -1;
  background-color: #f2f2f2;

}
.orderSummaryContainer {
  font-size: 14px;
  width: 90%;
  margin: 15px auto;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
}
.orderSummaryItem1 {
  height: 100px;
  width: 50%;
  text-align: center;
}
.totalOrderTitle {
  line-height: 100px;
  font-size: 18px;
}
.totalOrderContent {
  height: 70px;
  margin-top: 15px;
  /* background-color: chartreuse; */
}
.orderNums {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
}
.orderPrice {
  font-size: 12px;
}
.orderSummaryItem2 {
  height: 20%;
  width: 33%;
  height: 80px;
  text-align: center;
}
.ordergrid {
  font-size: 20px;
}
.orderItem {
  font-size: 14px;
  border-top: 1px solid #C0C4CC;
  border-bottom: 10px solid #DCDFE6;
  background-color: white;
  width: 98%;
  margin: 0 auto;
}
.order-item-head {
  display: flex;
  height: 25px;
  padding-top: 8px;
  padding-left: 5px;
  border-bottom: 1px solid #DCDFE6;;
}
.order-item-head .orderID{
  flex: 1;
}
.order-item-head .orderTime{
  flex: 1;
  text-align: right;
  padding-right: 10px;
}
.order-item-prod {
  width: 100%;
  padding-left: 10px;
  border-bottom: 1px solid #DCDFE6;
}
.order-item-prod-th {
  background-color: #F2F6FC;
  display: flex;
  padding-left: 13px;
}
.order-item-content {
  margin-top: 5px;
  padding-left: 10px;

  border-bottom:1px solid #DCDFE6;
}
.order-item-operate {
  text-align: center;
  padding: 5px 0;
}
.order-item-operate button{
  margin-right: 10px;
}
</style>