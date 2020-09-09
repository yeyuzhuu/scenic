<template>
  <div class="sec">
    <!-- 顶部开始 -->
    <mt-header title="搜索">
      <img @click="back" src="../assets/img/back3.png" slot="left" class="">
    </mt-header>
    <!-- 顶部结束 -->
    <!-- 搜索框开始 -->
    <div id="input">
      <input type="text" class="input" placeholder="陕西历史博物馆">
      <img src="../assets/img/search1.png" alt="">
      <span @click="back">取消</span>
    </div>
    <!-- 搜索框结束 -->
    <!-- 热门景点开始 -->
    <div class="hot"></div>
    <!-- 热门景点结束 -->
    <!-- 附近景点开始 -->
    <div class="near"></div>
    <!-- 附近景点结束 -->
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.push("/");
    }
  }
}
</script>
<style scoped>
  @import url("../assets/css/search.css");
</style>