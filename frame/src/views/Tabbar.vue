<template>
  <div>
    <mt-tabbar v-model="sel" fixed>
      <mt-tab-item id="index">
        首页
        <img src="../assets/img/index_24_active2.png" slot="icon" v-if=" sel=='index' ">
        <img src="../assets/img/index_24.png" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
        <img src="../assets/img/me_24_active2.png" slot="icon" v-if=" sel=='me' ">
        <img src="../assets/img/me_24.png" slot="icon" v-else>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  // 接收传回的参数select
  props: ["select"],
  data() {
    return {
      // 变量sel接收select的值
      sel: this.select,
    };
  },
  // 监听页面底部的变化
  watch:{
    sel(value){
      switch(value){
        case "index":
          this.$router.push("/");
          break;
        case "me":
          this.$router.push("/me");
          break;
      }
    }
  }
};
</script>