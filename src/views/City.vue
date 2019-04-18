<template>
  <div id="home">
    <div class="city_header">
      <van-nav-bar title="当前城市" left-text="返回" left-arrow @click-left="$router.back()"/>
    </div>
    <div class="city_search">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
        />
      </form>
    </div>
    <div class="ccc">
      <div class="city_main">
        <div class="main_top">GPS定位你所在城市</div>
        <div class="mian_bottom">定位失败</div>
        <div class="main_hot">热门城市</div>
        <ul class="main_cen">
          <li>
            <a href="#">北京</a>
          </li>
          <li>
            <a href="#">上海</a>
          </li>
          <li>
            <a href="#">广州</a>
          </li>
          <li>
            <a href="#">深圳</a>
          </li>
        </ul>
      </div>
      <ul class="main" id="mains">
        <li v-for="item in myCitys" :key="item.py" :id="item.py">
          <p>{{ item.py }}</p>
          <ul class="two_main">
            <li v-for="city in item.list" :key="city.cityId">
              <a href="javascript:">{{ city.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="city_nav">
      <ul>
        <li v-for="item in pys" :key="item" @click="fn1(item)">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      value: '',
      cityList: []
    }
  },

  computed: {
    myCitys () {
      var index = 0
      var flag = {}
      var result = []
      this.cityList.forEach(item => {
        var py = item.pinyin.substr(0, 1).toUpperCase()
        if (flag[py]) {
          result[flag[py] - 1].list.push(item)
        } else {
          var obj = {
            py: py,
            list: [ item ]
          }
          flag[py] = ++index
          result.push(obj)
        }
      })
      result.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
      return result
    },
    pys () {
      return this.myCitys.map(item => {
        return item.py
      })
    }
  },

  methods: {
    getCityList () {
      Axios.get('https://m.maizuo.com/gateway?k=2768064', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15546154461945620186257"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(res => {
        let data = res.data
        if (data.status === 0) {
          this.cityList = data.data.cities
        } else {
          alert(data.msg)
        }
      })
    },
    fn1 (py) {
      var el = document.getElementById(py)
      var heightTop = el.offsetTop + 200
      document.documentElement.scrollTop = heightTop
    }
  },
  created () {
    this.getCityList()
  }
}
</script>

<style>
a {
  color: #000;
  font-size: 14px;
}
body {
  overflow-x: hidden;
  background-color: #f4f4f4;
}
.city_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 300;
  background-color: #fff;
}
.c_left {
  width: 14%;
  float: left;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.c_right {
  width: 72%;
  text-align: center;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #191a1b;
  height: 44px;
}
.city_search {
  z-index: 2000;
  height: 30px;
  width: 100vw;
  background-color: #f4f4f4;
  position: fixed;
  padding: 10px 0;
  top: 44px;
}
.city_search .sea_outer {
  background-color: #fff;
  position: relative;
  border-radius: 3px;
  width: 90%;
  height: 30px;
  margin: auto;
}
.city_search .sea_outer > i {
  position: absolute;
  left: 7px;
  top: 0;
  line-height: 30px;
  font-size: 21px;
  color: #797d82;
  font-size: 20px;
}
.city_search .sea_outer > .city_txt {
  position: absolute;
  left: 33.5px;
  top: 0;
  height: 30px;
  width: calc(100% - 65px);
  border: 0;
}
.ccc {
  position: relative;
  padding-top: 94px;
}
.city_main {
  position: relative;
  overflow: hidden;
  background: #fff;
  background-color: #fff;
  padding-left: 15px;
}
.city_main .main_top {
  font-size: 13px;
  color: #797d82;
  margin-bottom: 10px;
  padding-top: 15px;
}
.city_main .mian_bottom {
  width: calc((100vw - 33px) / 3);
  text-align: center;
  height: 30px;
  background-color: #f4f4f4;
  line-height: 30px;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 0 7.5px;
  font-size: 14px;
  color: #191a1b;
}
.city_main .main_hot {
  font-size: 13px;
  color: #797d82;
  margin: 10px 0;
}
.city_main .main_cen {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background: #fff;
  overflow-x: hidden;
}
.city_main .main_cen > li {
  width: calc((100vw - 78px) / 3);
  text-align: center;

  margin: 8px;
  box-sizing: border-box;
  float: left;
  background-color: #f4f4f4;
  line-height: 30px;
  border-radius: 3px;
}
.main {
  position: absolute;
  top: 300px;
  left: 0;
}
.main > li > p {
  background-color: #f4f4f4;
  color: #797d82;
  margin: 0 0 0 15px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.main .two_main {
  display: flex;
  background: #fff;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  padding: 0 0 0 15px;
}
.main .two_main > li {
  height: 48px;
  width: calc((100vw - 33px) / 3);
  text-align: center;
  float: left;
  line-height: 48px;
  border-bottom: 1px solid #ededed;
}
.city_nav {
  border: 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1999;
  width: 17px;
  height: 100%;
  padding-top: 165px;
  background-color: #fff;
}
.city_nav > ul > li {
  font-size: 12px;
  text-align: center;
}
</style>
