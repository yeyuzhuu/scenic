<template>
 <div id="app">
  <!-- 顶部搜索栏以及热搜 -->
  <div class="header">
    <p class="title">门票</p>
    <!-- 搜索框开始 -->
    <div class="inp" @click="sec">
      <div class="inpL">
        <img src="../assets/img/line.png" />
        西安
      </div>
      <div class="inpR">
        <img src="../assets/img/search1.png" />
        <span>陕西历史博物馆</span>
      </div>
    </div>
    <!-- 搜索框结束 -->
    <!-- 热搜开始 -->
    <div class="hotSec">
      <p>热搜</p>
      <span>西安秦岭野生动物园</span>
      <span>陕西历史博物馆</span>
      <span>西安碑林博物馆</span>
    </div>
    <!-- 热搜结束 -->
  </div>
  <!-- 顶部搜索栏以及热搜结束 -->
  <!-- 轮播图模块 -->
  <div class="swipe">
   <mt-swipe :auto="4000" :speed="800">
    <mt-swipe-item :src="item.img" v-for="(item,index) of picList" :key="index" v-show=" n==index ">
     <img :src="item.img" alt />
    </mt-swipe-item>
   </mt-swipe>
  </div>
  <!-- 轮播图模块结束 -->
  <!-- 引入底部模块 -->
  <tabbar :select="select"></tabbar>
  <!-- 底部 -->
 </div>
</template>
<script>
import tabbar from "../views/Tabbar.vue";
export default {
 components: { tabbar },
 data() {
  return {
   select: "index",
   picList: [
    { img: require("../assets/img/carousel/111.jpg") },
    { img: require("../assets/img/carousel/222.jpg") },
    { img: require("../assets/img/carousel/444.jpg") },
    { img: require("../assets/img/carousel/222.jpg") },
   ],
   n: 0,
  };
 },
 methods: {
  sec() {
   this.$router.push("/search");
  },
 },
};
</script>
<style scoped>
@import url("../assets/css/index.css");
</style>
<style>
@import url("../assets/css/comm.css");
</style>
