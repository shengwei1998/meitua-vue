<template>
  <div id="mt-search">
   <van-nav-bar
      title="标题"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
  <nav class="search-tittle">热门搜索</nav>
  <section class="search-tittle-content">
    <ul>
      <li
      v-for="(items,index) in hotlist"
      :key="index">
        <a href="javascript:;" class="search-tittle-lete" @click="addtittle(items.labelName)">{{ items.labelName }}</a>
      </li>
    </ul>
  </section>
  <section class="search-page">
    <ul>
      <li class="search-page-list">
        <div class="page-list-content"
        v-for="(items,index) in fittlerdata"
        :key="index">
          <van-icon name="search" size='18px'  class="page-list-icon"/>
          <span class="page-list-tittel">{{ items.content }}</span>
        </div>
      </li>
    </ul>
  </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      value: '',
      hotlist: [],
      searchlist:[]
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onSearch () {

    },
    getdatahot () {
      axios.get('/json/search.json')
        .then(res => {
          let ress = res.data
          if (res.status === 200) {
            this.hotlist = ress.data.hotLabelList
            // console.log(this.hotlist)
          } else {
            alert('请求错误')
          }
        })
    },
    getdataeat(){
      axios.get('/json/search_list.json')
      .then( res=>{
        if(res.status===200){
          this.searchlist=res.data.data.suggests
        }else{
           alert('请求错误')
        }
      })
    },
    addtittle(laName){
      this.value=laName
    }
  },
  computed:{
    fittlerdata(){
      if(this.value !=''){
          let fpdata=this.searchlist.filter(items=>{
          return items.content.indexOf(this.value)!==-1
     })
      return fpdata
      }
    }
  },
  created () {
    this.getdatahot()
  },
  mounted(){
    this.getdataeat()
  }
}
</script>

<style lang="scss">
#mt-search {
  width: 100%;
  height: auto;
  .search-tittle {
    color: #999;
    font-size: 14px;
    height: 40px;
    margin-left: 10px;
    line-height: 40px;
    border-bottom: 1px solid #e4e4e4;
  }
   .search-tittle-content {
      background: #fff;
      margin: 13px 10px 24px 10px;
      max-height: 80px;
      overflow: hidden;
     li{
       float: left;
        .search-tittle-lete {
        padding: 0 10px;
        height: 28px;
        line-height: 28px;
        color: #666;
        margin: 5px 10px;
        margin-left: 0;
        font-size: 13px;
        position: relative;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        border: 1px solid #d7d7d7;
        border-radius: 2px;
      }
      }
    }
    .search-page{
      width: 100%;
      height: auto;
      border-bottom: 1px solid #e4e4e4;
      .search-page-list{
        padding-left: 16px;
        font-size: 14px;
        .page-list-content{
            height: 44px;
            padding: 12px 0;
            position: relative;
            border-bottom: 1px solid #e4e4e4;
            color: #333;
            box-sizing: border-box;
            .page-list-icon{
                margin-right: 9px;
            }
            .page-list-tittel{
              font-size: 14px;
            }
        }
      }
    }
}

</style>
