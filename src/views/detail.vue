<template>
  <div>
    <div class="detail_wrap">
      <van-nav-bar
        :title="info.name"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />

      <van-card
        v-for="item in info.goods"
        :key="item.goodId"
        :price="item.currentPrice"
        :desc="item.spuDesc"
        :title="item.spuName"
        :thumb="item.img"
        :origin-price="item.originPrice"
      >
        <div slot="footer">
          <van-button size="mini" @click="jian(item)" class="det_01">-</van-button>
          <span>1</span>
          <van-button size="mini" @click="add(item)" class="det_01">+</van-button>
        </div>
      </van-card>
    </div>

    <van-goods-action>
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
        @click="onClickMiniBtn"
      />
      <van-goods-action-mini-btn
        icon="shop-o"
        text="店铺"
      />
      <van-goods-action-big-btn
        primary
        text="立即购买"
      />
    </van-goods-action>

    <div id="detail_foot">
      <van-actionsheet v-model="show" title="购物车">
        <p>一些内容</p>
        <p>一些内容</p>
        <p>一些内容</p>
      </van-actionsheet>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: {},
      show: false,
      catData: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    detList () {
      axios.get('/json/list.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        if (res.status === 200) {
          let data = res.data
          // console.log(res.status);
          this.info = data.find(item => {
            console.log(parseInt(this.$route.params.id))
            return item.id === parseInt(this.$route.params.id)
          })
        } else {
          alert('网络错误')
        }
      })
    },
    onClickMiniBtn () {
      if (this.show === false) {
        this.show = true
      } else {
        this.show = false
      }
    },
    add (good) {
      var index = this.catData.findIndex(item => item.id === good.id)
      if (index > -1) {
        this.catData[index].num += 1
      } else {
        this.catData.push(Object.assign({}, good, { num: 1 }))
      }
    }
  },
  created () {
    this.detList()
  }
}
</script>

<style>
.detail_wrap{
  padding-bottom: 50px;
}
  .det_01{
    width: 25px !important;
    height: 25px;
    background: orange;
    border-radius: 50%;
    font-size: 20px;
    margin-left: 6px;
  }
  .van-button--mini{
    min-width: 25px;
  }
  .van-card__footer {
    position: absolute;
    right: 10px;
    top: 50px;
  }
  .van-card__price {
    font-size: 18px;
    text-align: center;
    line-height: 25px;
  }
  .van-goods-action{
    z-index: 9999;
  }
  .van-popup--bottom{
    width: 100%;
    top: auto;
    bottom: 50px;
    right: auto;
    left: 50%;
    transform: translate3d(-50%,0,0);
  }
  .van-overlay {
    position: fixed;
    bottom: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
  }
  .van-popup{
    transition: .1s linear;
  }
</style>
