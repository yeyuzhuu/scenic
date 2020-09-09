<template>
 <div id="app">
  <!-- 顶部搜索栏以及热搜 -->
  <div class="header">
   <p class="title">门票</p>
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
  </div>
  <!-- 顶部搜索栏以及热搜结束 -->
  <!-- 轮播图模块 -->
  <div class="swipe">
   <mt-swipe :auto="4000">
    <mt-swipe-item>
     <img :src="item.img" v-for="(item,index) of picList" :key="index" v-show=" n==index " />
    </mt-swipe-item>
   </mt-swipe>
  </div>
  <!-- 引入底部模块 -->
  <tabbar :select="select"></tabbar>
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
   n: 1,
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
