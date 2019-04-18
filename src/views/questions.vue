<template>
  <div id="mt-questions">
      <van-nav-bar
      title="常见问题"
      left-arrow
      @click-left="onClickLeft"
    />

<van-collapse v-model="activeNames"

v-for="(items,index) in questions_tittle"
:key='index'>
  <van-collapse-item :title="items.titl" :name="items.name">
    <ul class="questions-catalog-content">
        <li class="questions-help-item">
        <h3 class="questions-help-title">
          {{ items.content_h3 }}
        </h3>
        <div class="questions-help-content">
         {{ items.content_div }}
        </div>
        </li>
      </ul>
  </van-collapse-item>

</van-collapse>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      activeNames: [""]
    }
  },
  computed:{
    ...mapState(['questions_tittle'])
  },
  methods: {
    onClickLeft(){
      this.$router.back()
    }
  },
};
</script>

<style lang="scss">
#mt-questions {
  .questions-catalog-content {
    padding-left: 15px;
    margin-top: -1px;
    .questions-help-item {
      padding: 15px 39px 14px 0;
      border-top: 1px solid #dddddd;
      .questions-help-title {
        font-size: 15px;
        font-weight: normal;
        color: #333333;
        .questions-help-content {
          font-size: 12px;
          color: #888888;
          margin-top: 13px;
        }
      }
    }
  }
}
</style>

