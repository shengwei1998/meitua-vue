<template>
  <div class="ident_wrap">
    <van-nav-bar
      class="ident_header"
      title="订单列表"
      left-arrow
      @click-left="$router.back()"
    />

    <van-card
      v-for="item in catData"
      :key="item.goodId"
      :price="item.currentPrice"
      :desc="item.spuDesc"
      :title="item.spuName"
      :thumb="item.img"
      :origin-price="item.originPrice"
    >
      <div slot="footer" class="ident_main">
        <div class="ident_num">x {{ item.num }}</div>
        <van-button size="mini" @click="catReduce(item)">-</van-button>
        <van-button size="mini" @click="catAdd(item)">+</van-button>
      </div>
    </van-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('cat', [
      'catData'
    ])
  },
  methods: {
    ...mapMutations('cat', [
      'catAdd',
      'catReduce'
    ])
  }
}
</script>

<style>
  .ident_wrap{
    padding: 50px 0;
  }
  .ident_header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #ededed;
    z-index: 999;
  }
  .ident_main{
    position: absolute;
    top: 50px;
    right: 20px;
  }
  .ident_num{
    margin: 0 0 10px 60px;
    border: 1px solid #000;
    width: 30px;
    height: 20px;
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
    color: red;
    font-weight: 900;
  }
</style>
