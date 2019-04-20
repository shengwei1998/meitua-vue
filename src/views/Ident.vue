<template>
  <div class="ident_wrap">
    <van-nav-bar
      class="ident_header"
      title="订单列表"
      left-arrow
      @click-left="$router.back()"
    />

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        :offset="10"
      >

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
            <van-button size="mini" @click="catReduce(item);fn2()">-</van-button>
            <van-button size="mini" @click="catAdd(item);fn1()">+</van-button>
          </div>
        </van-card>
      </van-list>
    </van-pull-refresh>

    <van-submit-bar
      :price="abc"
      v-if="goodCatNum"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip" v-if="isShow" @click="isShow = false">
        你的收货地址不支持同城送, <router-link to="/addresslist">修改地址</router-link>
      </span>
    </van-submit-bar>
    <van-submit-bar
      :price="abc"
      disabled
      v-else
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <span slot="tip" v-if="isShow" @click="isShow = false">
        你的收货地址不支持同城送, <router-link to="/addresslist">修改地址</router-link>
      </span>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      list: [],
      loading: false, // 是否处于加载状态
      finished: false, // 是否已加载完所有数据
      isLoading: false, // 是否处于下拉刷新状态
      checked: 1,
      isShow: true
    }
  },
  computed: {
    ...mapState('cat', [
      'catData'
    ]),
    ...mapGetters('cat', [
      'abc',
      'goodCatNum'
    ])
  },
  methods: {
    ...mapMutations('cat', [
      'catAdd',
      'catReduce'
    ]),
    fn1 () {
      this.$toast('添加成功')
    },
    fn2 () {
      this.$toast('删除成功')
    },
    onSubmit () {
      this.$router.push({ path: '/pay' })
    },
    onLoad () { // 上拉加载
      setTimeout(() => {
        for (let i = 0; i < 15; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false
        if (this.list.length >= 60) {
          this.finished = true
        }
      }, 500)
    },
    onRefresh () { // 下拉刷新
      setTimeout(() => {
        this.finished = false
        this.isLoading = false
        this.list = []
        this.onLoad()
        location.reload()
      }, 500)
    },
    mounted () {
      let winHeight = document.documentElement.clientHeight // 视口大小
      document.getElementById('list-content').style.height = (winHeight - 46) + 'px' // 调整上拉加载框高度
    }
  }
}
</script>

<style>
  a{
    font-size: 12px;
    color: #000;
  }
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
    display: inline-block;
    margin-bottom: 6px;
  }
  .ident_num{
    margin: 0 0 6px 50px;
    border: 1px solid #000;
    width: 30px;
    height: 20px;
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
    color: red;
    font-weight: 900;
  }
  .van-checkbox {
    margin-left: 16px;
  }
  .van-submit-bar__bar{
    background: #eee;
  }
</style>
