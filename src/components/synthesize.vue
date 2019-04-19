<template>
  <div>
    <ul class="synth_allLi">
      <li
        v-for="item in synList"
        :key="item.id"
      >
        <router-link :to="'/detail/' + (item.id ? item.id :'') ">
          <div class="synth_left">
            <img :src="item.poiTypeIcon" alt="" class="syn_img1">
            <img :src="item.img" alt="" class="syn_img2">
          </div>
          <div class="synth_right">
            <div class="box01">{{ item.name }}</div>
            <div class="box02">
              <div class="box02_left">
                <div class="china">
                  <i class="iconfont icon-wujiaoxing"></i>
                  <i class="iconfont icon-wujiaoxing"></i>
                  <i class="iconfont icon-wujiaoxing"></i>
                  <i class="iconfont icon-wujiaoxing"></i>
                  <i class="iconfont icon-wujiaoxing"></i>
                </div>
                <span class="syn_aa">{{ item.grade }}</span>
                <span class="syn_bb">月售 {{ item.onSale }}</span>
              </div>
              <div class="box02_right">
                <span>{{ item.deliveryTimeTip }}</span>
                <span class="befor">{{ item.distance }}</span>
              </div>
            </div>
            <div class="box03">
              <span>起送{{ item.minPriceTip }}</span>
              <span class="befor">配送 {{ item.shippingFeeTip}}</span>
              <span class="befor">人均 {{ item.averagePriceTip }}</span>
              <span class="org">美团专送</span>
            </div>
            <div class="box04">
              <p>
                <img src="http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png" alt="">
                {{ item.info }}
              </p>
              <p>
                <img :src="item.invoice" alt="">
                {{ item.discount }}
              </p>
            </div>
          </div>
        </router-link>
      </li>
      <div class="load_more" @click="loadMore" v-if="pageNum < totalPage">加载更多....</div>
      <div class="load_more" v-else>你太厉害了！到底啦..</div>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      synList: [],
      pageNum: 1,
      pageSize: 6,
      totalSize: 10
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.totalSize / this.pageSize)
    }
  },
  methods: {
    onLoad () {
      Axios.get('/json/list.json', {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        if (res.status === 200) {
          let data = res.data
          this.totalSize = data.length
          this.synList = this.synList.concat(data.splice((this.pageNum - 1) * this.pageSize, this.pageSize))
        } else {
          alert(res.msg)
        }
      })
    },
    loadMore () {
      this.pageNum++
      this.onLoad()
    }
  },
  created () {
    this.onLoad()
  }
}
</script>

<style>
.synth_allLi{
  margin-top: 10px;
  padding-bottom: 50px;
}
  .synth_allLi>li{
    margin-bottom: 20px;
  }
  .synth_allLi>li>a{
    display: flex;
    padding: 0 10px;
  }
  .synth_left{
    width: 76px;
    height: 57px;
    position: relative;
    border: 1px #e4e4e4 solid;
    margin-right: 8px;
  }
  .synth_right{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .synth_left>.syn_img1{
    width: 26px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .synth_left>.syn_img2{
    width: 76px;
    height: 57px;
  }
  .box01{
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    font-size: 16px;
  }
  .box02{
    display: flex;
    justify-content: space-between;
  }
  .box02 span{
    font-size: 12px;
    color: #333;
  }
  .box02_left{
    display: flex;
    align-items: center;
  }
  .box02_left>.china>i{
    font-size: 12px;
    color: orange;
  }
  .box02_left>.syn_aa{
    margin-left: 6px;
    margin-top: 5px;
  }
  .box02_left>.syn_bb{
    margin-left: 10px;
    margin-top: 5px;
  }
  .box02_right{
    float: right;
    flex: 1 0;
    text-align: right;
  }
  .befor::before{
    content: "";
    display: inline-block;
    margin: 0 3px;
    height: 6px;
    width: 1px;
    background: #ccc;
  }
  .box03{
    display: flex;
    align-items: center;
    line-height: 20px;
  }
  .box03>span{
    font-size: 12px;
    color: #333;
  }
  .org{
    display: block;
    margin-left: 60px;
    width: 50px;
    height: 15px;
    line-height: 15px;
    background: orange;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .box04{
    display: flex;
    flex-direction: column;
  }
  .box04>p{
    color: #666;
    font-size: 12px;
    margin: 3px 0;
  }
  .box04>p>img{
    width: 15px;
    height: 15px;
    vertical-align: middle;
  }
  .load_more{
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
</style>
