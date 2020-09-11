<template>
  <div id="app">
    <!-- 顶部搜索栏以及热搜 -->
    <div class="header">
      <p class="title">门票</p>
      <!-- 搜索框开始 -->
      <div class="inp">
        <div class="inpL">
          <img src="../assets/img/line.png" />
          西安
        </div>
        <div class="inpR" @click="sec">
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
    <!-- 模块分类 -->
    <div class="sc_sort">
      <ul>
        <li v-for="(item, index) of sort" :key="index">
          <router-link to="/list" @click="too">
            <img :src="item.img" />
            <p>{{ item.name }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 模块分类结束 -->
    <!-- 顶部搜索栏以及热搜结束 -->
    <!-- 轮播图模块 -->
    <div class="swipe">
      <mt-swipe :auto="4000" :speed="800">
        <mt-swipe-item
          :src="item.img"
          v-for="(item, index) of picList"
          :key="index"
          v-show="n == index"
        >
          <img :src="item.img" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图模块结束 -->
    <!-- 必玩模块 -->
    <div>
      <div class="title">
        <mt-cell title="西安必玩" to="/list">更多 ></mt-cell>
      </div>
      <div class="P">
        <div class="play">
          <div class="top1" v-for="(item, index) of playList" :key="index">
            <div class="img">
              <img :src="item.img" />
            </div>
            <em>top{{ item.rank }}</em>
            <p>{{ item.tit }}</p>
            <span>{{ item.det }}</span>
          </div>
        </div>
      </div>
      <!-- 必玩模块结束 -->
      <!-- 引入底部模块 -->
      <div class="footer" style="margin-bottom: 500px;"></div>
      <tabbar :select="select"></tabbar>
      <!-- 底部 -->
    </div>
  </div>
</template>
<script>
import tabbar from "../views/Tabbar.vue";
export default {
  components: { tabbar },
  data() {
    return {
      select: "index",
      sort: [
        { img: require("../assets/img/exhibition.jpg"), name: "展馆预览" },
        { img: require("../assets/img/monument.jpg"), name: "文化古迹" },
        { img: require("../assets/img/park.jpg"), name: "主题乐园" },
        { img: require("../assets/img/Scenery.jpg"), name: "自然风光" },
        { img: require("../assets/img/therma.jpg"), name: "温泉泡汤" },
      ],
      picList: [
        { img: require("../assets/img/carousel/111.jpg") },
        { img: require("../assets/img/carousel/222.jpg") },
        { img: require("../assets/img/carousel/444.jpg") },
        { img: require("../assets/img/carousel/222.jpg") },
      ],
      playList: [
        {
          rank: "1",
          img: require("../assets/img/QQ图片20200910110214.jpg"),
          tit: "秦始皇帝陵博物院",
          det: "看壮观兵马俑群",
        },
        {
          rank: "2",
          img: require("../assets/img/QQ图片20200910110214.jpg"),
          tit: "长恨歌",
          det: "大型实景表演",
        },
        {
          rank: "3",
          img: require("../assets/img/QQ图片20200910110214.jpg"),
          tit: "陕西历史博物馆",
          det: "有华夏珍宝库之称",
        },
        {
          rank: "4",
          img: require("../assets/img/QQ图片20200910110214.jpg"),
          tit: "驼铃传奇秀",
          det: "情侣出行",
        },
      ],
      n: 0,
    };
  },
  methods: {
    sec() {
      this.$router.push("/search");
    },
    too() {
      //  console.log(this.name);
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
