<template>
  <div>
    <div class="detail_wrap">
          <van-nav-bar
            class="tail_header"
            :title="info.name"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
          />
      <div class="detail_main">
        <div class="det_nav">
          <div>网红蛋糕</div>
          <div>水果蛋糕</div>
          <div>玫瑰之约</div>
          <div>双层蛋糕</div>
          <div>单车恋人</div>
        </div>
        <div class="det_setting">
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
              <van-button size="mini" @click="catReduce(item)" class="det_01">-</van-button>
              <span>{{ showNum(item.goodId) }}</span>
              <van-button size="mini" @click="catAdd(item)" class="det_01">+</van-button>
            </div>
          </van-card>
        </div>
      </div>
    </div>

    <van-goods-action>
      <van-goods-action-mini-btn
      v-if="goodCatNum"
        icon="cart-o"
        :info="goodCatNum"
        text="购物车"
        @click="onClickMiniBtn"
      />
      <van-goods-action-mini-btn
        v-else
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
        <ul class="detail_allLi">
          <li
            v-for="good in catData"
            :key="good.goodId"
          >
            <img :src="good.img" alt="">
            <div class="det_box">
              <b>{{ good.spuName }}</b>
              <div class="dea_abc">
                <span>￥ {{ good.currentPrice }}</span>
                <strong>数量为：{{ good.num }}</strong>
              </div>
            </div>
          </li>
        </ul>
      </van-actionsheet>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapGetters, mapState } from 'vuex'
export default {
  data () {
    return {
      info: {},
      show: false
    }
  },
  computed: {
    ...mapState(
      [ 'catData' ]
    ),
    ...mapGetters([
      'goodCatNum'
    ])
  },
  methods: {
    ...mapMutations([
      'catAdd',
      'catReduce'
    ]),
    onClickLeft () {
      this.$router.back()
    },
    detList () {
      axios.get('/json/list.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        /* console.log(res.data[0].goods)
         this.catData = res.data[0].goods */
        if (res.status === 200) {
          let data = res.data
          this.info = data.find(item => {
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
    showNum (goodId) {
      var data = null
      data = this.$store.state.catData.find(item => item.goodId === goodId)
      return data ? data.num : ''
    }
  },
  activated () {
    this.detList()
  }
}
</script>

<style>
  .detail_wrap{
    padding-bottom: 50px;
    padding-top: 46px;
  }
  .detail_main{
    position: relative;
  }
  .det_nav{
    width: 80px;
    min-height: 100%;
    position: fixed;
    top: 46px;
    left: 0;
    z-index: 99;
    background: #f5f5f5;
  }
  .det_nav>div{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
  }
  .det_setting{
    padding-left: 65px;
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
  .detail_allLi{
    padding: 10px;
  }
  .detail_allLi>li{
    display: flex;
    margin-bottom: 15px;
  }
  .detail_allLi>li>img{
    width: 60px;
    height: 60px;
  }
  .detail_allLi>li>.det_box{
    margin-left: 20px;
    line-height: 30px;
    display: flex;
    flex-direction: column;
  }
  .dea_abc>span{
    color: red;
    font-weight: 900;
    margin-right: 50px;
  }
  .tail_header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 9999;
  }
</style>
