<template>
  <div>
    <van-nav-bar
      title="支付页面"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-notice-bar
      text="请确保支付环境安全！网络状态良好。"
      left-icon="volume-o"
    />

    <div class="pay_txt">
      <p>你共需支付金额为</p>
      <span>￥  {{ abc/100 }}</span>
    </div>

    <van-cell-group>
      <van-cell title="银行卡支付" icon="card" label="平安银行卡（4551）" />
      <van-cell title="微信支付" icon="wechat" />
      <van-cell title="支付宝支付" icon="alipay" />
    </van-cell-group>

    <van-radio-group v-model="radio">
      <van-radio name="1" class="abc"></van-radio>
      <van-radio name="2" class="def"></van-radio>
      <van-radio name="3" class="hij"></van-radio>
    </van-radio-group>

    <button class="btn" @click="fn1();gogo()">确认支付</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      radio: '1'
    }
  },
  methods: {
    fn1 () {
      this.$notify('支付成功')
    },
    onClickLeft () {
      this.$router.replace({ path: '/home' })
    },
    gogo () {
      this.$router.replace({ path: '/course' })
    }
  },
  computed: {
    ...mapGetters('cat', [
      'abc'
    ])
  }
}
</script>

<style>
  .pay_txt{
    text-align: center;
    margin: 30px 0;
  }
  .pay_txt>p{
    font-size: 14px;
    color: #ccc;
  }
  .pay_txt>span{
    font-size: 30px;
    color: black;
    font-weight: 900;
  }
  .van-cell{
    font-size: 16px;
    line-height: 30px;
  }
  .van-icon-card{
    color: skyblue;
    line-height: 30px;
    font-size: 25px;
  }
  .van-icon-wechat{
    color: rgb(142, 194, 64);
    line-height: 30px;
    font-size: 25px;
  }
  .van-icon-alipay{
    color: rgb(129, 129, 212);
    line-height: 30px;
    font-size: 25px;
  }
  .abc{
    position: absolute;
    top: 240px;
    right: 20px;
  }
  .def{
    position: absolute;
    top: 301px;
    right: 20px;
  }
  .hij{
    position: absolute;
    top: 352px;
    right: 20px;
  }
  .btn{
    width: 90%;
    margin-left: 5%;
    height: 50px;
    background: #06C1AE;
    border: 0;
    color: #fff;
    font-size: 16px;
    position: fixed;
    bottom: 15px;
    left: 0;
    border-radius: 5px;
  }
  .van-notify{
    background: skyblue !important;
    height: 60px;
    line-height: 50px;
    font-size: 20px;
  }

</style>
