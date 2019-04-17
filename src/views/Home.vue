<template>
  <div>
    <div class="home_header">
      <transition name="rightto">
          <van-search placeholder="请输入商家或商品名称" v-model="value" shape="round" class="box" @click='toserch'  v-if="show"/>
          <van-search placeholder="请输入商家或商品名称" v-model="value" shape="round" class="next" @click='toserch' v-else/>
      </transition>
    </div>

    <div class="home_content">
      <ul class="home_allLi">
        <li>
          <a href="javascript:">
            <img src="../img/1.png" alt="">
            <span>美食</span>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../img/2.png" alt="">
            <span>美团超市</span>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../img/3.png" alt="">
            <span>生鲜水果</span>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../img/4.png" alt="">
            <span>美团专送</span>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../img/5.png" alt="">
            <span>午餐优选</span>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../img/6.png" alt="">
            <span>甜点饮品</span>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../img/7.png" alt="">
            <span>小吃馆</span>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../img/8.png" alt="">
            <span>家常菜</span>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../img/9.png" alt="">
            <span>鲜花蛋糕</span>
          </a>
        </li>
        <li>
          <a href="javascript:">
            <img src="../img/10.png" alt="">
            <span>品牌连锁</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="home_nearby">附近商家</div>

    <div class="home_list">
      <ul>
        <li>
          <router-link to="/home/synthesize">综合排序<i class="iconfont icon-jiantou9"></i></router-link>
        </li>
        <li>
          <router-link to="/home/topselling" :style="tabColor">销量最高</router-link>
        </li>
        <li>
          <a href="javascript:">距离最近</a>
        </li>
        <li>
          <a href="javascript:">筛选<i class="iconfont icon-shaixuan"></i></a>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      tabColor: {
        color: '#000',
        'font-weight': 900
      },
      show:true
    }
  },
  methods: {
    getchange(){
      let that=this
      window.onscroll=function(){
        let sc=document.documentElement.scrollTop
        if(sc>200){
          that.show=false
        }else{
          that.show=true
        }
      }
    },
    toserch(){
      this.$router.push('/search')
    }
  },
  created() {
    this.getchange()
  },
}

</script>

<style>
  .home_header{
    height: 54px;
  }
  .home_header .box .van-search__content--round{
    display: flex;
    justify-content: flex-end;
    flex: 0.6;
  }
  .home_header .next .van-search__content--round{
    display: flex;
    justify-content: center;
    flex: 1;
  }
  .box{
    background: #000 !important;
    width: 100%;
    position: fixed;
    z-index: 66;
    top: 0;
    left: 0;
  }
  .next{
    background: #000 !important;
    width: 100%;
    position: fixed;
    z-index: 66;
    top: 0;
    left: 0;
  }
  .home_content{
    overflow: hidden;
    background: #fff;
    margin-bottom: 15px;
    max-height: 170px;
  }
  .home_allLi{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .home_allLi>li{
    display: flex;
    width: 20%;
    justify-content: center;
    margin-top: 15px;
  }
  .home_allLi>li>a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .home_allLi>li>a>img{
    width: 44px;
    height: 44px;
  }
  .home_allLi>li>a>span{
    color: #333;
    font-size: 12px;
    margin-top: 6px;
  }
  .home_nearby{
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 16px;
  }
  .home_nearby::before{
    content: '';
    height: 1px;
    width: 60px;
    background: #666;
    margin-right: 4px;
    transform-origin: 100% 50%;
    transform: scale(0.5);
    display: inline-block;
  }
  .home_nearby::after{
    content: '';
    height: 1px;
    width: 60px;
    background: #666;
    margin-left: 3px;
    transform-origin: 0 50%;
    transform: scale(0.5);
    display: inline-block;
  }
  .home_list{
    height: 40px;
    position: sticky;
    top: 54px;
    background: #fff;
    z-index: 99;
  }
  .home_list>ul{
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  .home_list>ul>li>a{
    font-size: 14px;
    color: #666;
  }
  .home_list>ul>li>a>i{
    font-size: 14px;
    color: #666;
    margin-left: 3px;
  }
</style>


