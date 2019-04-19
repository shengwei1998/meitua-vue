<template>
  <div id="mt-preview">
    <van-nav-bar
      title="提交订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="preview-content">
      <van-cell title="55" icon="location" is-link  class="preview-content-adreess" to="/addresslist" v-if="isshow">
      <template slot="title">
        <div class="tobuy-adreess">{{ list.address }}</div>
        <div class="tobuy-messag">
          <span>{{ list.name }}</span>
          <span></span>
          <span>{{ list.tel }}</span>
        </div>
      </template>
    </van-cell>
     <van-cell title="55" icon="add" is-link class="preview-content-yellow" v-else
      to="/addresslist">
      <template slot="title">
        <div class="tobuy-adreess">选择收货地址</div>
      </template>
    </van-cell>
    <van-cell title="55" icon="clock" is-link class="preview-content-time">
      <template slot="title">
        <div class="tobuy-adreess">立即送出</div>
        <div class="tobuy-time">(大约19：07送达)</div>
      </template>
    </van-cell>
    </div>
   <div class="preview-content">
      <van-panel title="标题" status="商家自配">
      <div>
        <van-card
          :num="item.num"
          :price="item.currentPrice"
          :desc="item.skuPromotionInfo"
          :title="item.spuName"
          :thumb="item.img"
          v-for="item in shopdata"
          :key="item.goodId"
          :origin-price="item.originPrice"
        >
        </van-card>
      </div>
      <div slot="footer">
        <span>小计:</span><span class="footer-price">￥{{ addprices/100 }}</span>
      </div>
    </van-panel>
   </div>
   <div class="preview-content-bottom">
     <van-cell-group>
      <van-cell title="支付方式"  value="在线支付"/>
      <van-cell title="餐具数量" is-link value="未选择"/>
      <van-cell title="备注" is-link value="口味偏好" />
      <van-cell title="发票" is-link value="个人发票"  />
     </van-cell-group>
   </div>
    <div class="preview-footer">
      <van-submit-bar
      :price="addprices"
      button-text="提交订单"
      @submit="onSubmit"
    />
    <div class="preview-dilog">

    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'preview',
  data () {
    return {
      userid: '1',
      list: [],
      backdeatil: '',
      shopdata: ''
    }
  },
  methods: {
    // 插件dailog

    // 返回
    onClickLeft () {
      this.backdeatil = localStorage.getItem('backdeatil')
        ? localStorage.getItem('backdeatil')
        : ''
      this.$router.push({ name: 'detail', params: { id: this.backdeatil } })
      localStorage.removeItem('backdeatil')
    },
    onSubmit () {}
  },
  created () {
    this.list = this.getsavead
    this.shopdata = JSON.parse(localStorage.getItem('catData'))
      ? JSON.parse(localStorage.getItem('catData'))
      : ''
  },
  computed: {
    getsavead () {
      return localStorage.getItem('savesad')
        ? JSON.parse(localStorage.getItem('savesad'))
        : []
    },
    // 计算总价格
    addprices () {
      let sum = 0
      this.shopdata.map(item => {
        sum += Number(item.num * item.currentPrice) * 100
      })
      return sum
    },

    // 是否已添加地址
    isshow () {
      if (this.getsavead.address) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>$options

<style lang="scss">
body {
  background: #f4f4f4;
}
#mt-preview {
  .preview-dilog .van-popup--bottom{
    bottom: 0;
  }
  .footer-price {
    color: #f44;
  }
  .van-nav-bar {
    margin-bottom: 10px;
  }
  .preview-content-bottom {
    margin-bottom: 100px;
  }
  .preview-content {
    .preview-content-adreess {
      width: 100%;
      height: 100%;
      .tobuy-adreess {
        font-weight: bold;
        font-size: 15px;
        color: #333333;
        margin-bottom: 3px;
        height: 21px;
        line-height: 21px;
        margin-left: 10px;
      }
      .tobuy-messag {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 20px;
        line-height: 20px;
        color: #777777;
        span {
          display: inline-block;
          vertical-align: top;
          max-width: 80px;
          height: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0 10px;
        }
      }
    }
    .preview-content-yellow {
      color: #ffb000;
      .van-cell__title {
        display: flex;
      }
      .tobuy-adreess {
        font-weight: bold;
        font-size: 15px;
        color: #ffb000;
        margin-bottom: 3px;
        height: 21px;
        line-height: 21px;
        margin-left: 10px;
      }
    }
    .preview-content-time {
      .van-cell__title {
        display: flex;
      }
      .tobuy-adreess {
        font-weight: bold;
        font-size: 15px;
        color: #333333;
        margin-bottom: 3px;
        height: 21px;
        line-height: 21px;
        margin-left: 10px;
      }
      .tobuy-time {
        padding-right: 24px;
        box-sizing: border-box;
        display: inline-block;
        margin-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: #348bed;
        height: 21px;
        line-height: 21px;
        vertical-align: middle;
      }
    }
  }
  .van-cell-group {
    margin: 10px;
    .van-panel__content {
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
