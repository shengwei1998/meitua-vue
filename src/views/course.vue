<template>
  <div>
    <div class="cou_header">
      <div class="cou_fix">
        <van-nav-bar
          title="订单状态"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
      </div>
    </div>

    <div class="cur_main">
      <van-steps :active="active">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
    </div>

    <van-steps direction="vertical" :active="4">
      <van-step>
        <h3>交易完成</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>卖家已签收</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>正在配送中</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>待骑手就位</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>商家正在准备</h3>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>商家已接单</h3>
        <p>2016-07-10 09:30</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 1
    }
  },
  methods: {
    onClickLeft () {
      this.$router.replace({ path: '/ident' })
    }
  }
}
</script>

<style>
  .cou_header{
    height: 46px;
    margin-bottom: 10px;
  }
  .cou_fix{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 99;
  }
  .cur_main{
    margin-bottom: 10px;
  }
</style>
