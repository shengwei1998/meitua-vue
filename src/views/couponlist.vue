<template>
  <div id="couponlist">

<van-popup v-model="showList" position="bottom">
 <van-nav-bar
  title="美团红包"
  left-arrow
  @click-left="onClickLeft"
/>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
  </div>
</template>
<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
}

export default {
  data () {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: true
    }
  },

  methods: {
    onChange (index) {
      this.$router.push('/center')
      this.chosenCoupon = index
    },
    onExchange (code) {
      this.coupons.push(coupon)
    },
    onClickLeft () {
      this.$router.push('/center')
    }
  }
}
</script>

<style lang="scss">
  #couponlist{
     .van-overlay{
      position: relative;
      .van-nav-bar{
        background-color: black;
      }
    }
  }

</style>
