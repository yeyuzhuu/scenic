<template>
  <div>
    <!-- 头部开始 -->
    <div class="title">
      <router-link to="/"> <img src="../assets/img/back3.png" /> </router-link
      >门票
    </div>
    <!-- 头部结束 -->
    <!-- 搜索框 -->
    <!-- <div class="search">
      <input type="text" placeholder="西安" />
      <img src="../assets/img/search1.png" alt />
    </div> -->
    <mt-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索">
</mt-search>
    <!-- 搜索框结束 -->
    <!-- 下拉菜单开始 -->
    <div>
      <!-- 全部景点开始 -->
      <select class="select" @change="changea($event)">
        <option value="全部景点" selected>全部景点</option>
        <option
          v-for="(item, index) of choose"
          :key="index"
          :value="item.sort"
          >{{ item.sort }}</option
        >
      </select>
      <!-- 全部景点下拉菜单结束 -->
      <!-- 全部商圈下拉菜单开始 -->
      <select class="select" @change="changea($event)">
        <option value="全部景点" selected>全部商圈</option>
        <option
          v-for="(item, index) of address"
          :key="index"
          :value="item.add"
          >{{ item.add }}</option
        >
      </select>
      <!-- 全部商圈下拉菜单结束 -->
    </div>
    <!-- 下拉菜单结束 -->
    <div class="list">
      <div class="img">123</div>
      <div class="deta">
        <p>陕西历史博物馆</p>
        <span class="des">有华夏珍宝库之称 赏唐墓壁画</span>
        <p>4.8分</p>
        <p class="adult">
          <span>成人票</span>
          <span>起</span>
          <span>¥58</span>
        </p>
        <p class="children">
          <span>儿童票</span>
          <span>起</span>
          <span>¥68</span>
        </p>
      </div>
    </div>
    <div class="list">
      <div class="img">123</div>
      <div class="deta">
        <p>陕西历史博物馆</p>
        <span class="des">有华夏珍宝库之称 赏唐墓壁画</span>
        <p>4.8分</p>
        <p class="adult">
          <span>成人票</span>
          <span>起</span>
          <span>¥58</span>
        </p>
        <p class="children">
          <span>儿童票</span>
          <span>起</span>
          <span>¥68</span>
        </p>
      </div>
    </div>
    <div class="list">
      <div class="img">123</div>
      <div class="deta">
        <p>陕西历史博物馆</p>
        <span class="des">有华夏珍宝库之称 赏唐墓壁画</span>
        <p>4.8分</p>
        <p class="adult">
          <span>成人票</span>
          <span>起</span>
          <span>¥58</span>
        </p>
        <p class="children">
          <span>儿童票</span>
          <span>起</span>
          <span>¥68</span>
        </p>
      </div>
    </div>
    <div class="list">
      <div class="img">123</div>
      <div class="deta">
        <p>陕西历史博物馆</p>
        <span class="des">有华夏珍宝库之称 赏唐墓壁画</span>
        <p>4.8分</p>
        <p class="adult">
          <span>成人票</span>
          <span>起</span>
          <span>¥58</span>
        </p>
        <p class="children">
          <span>儿童票</span>
          <span>起</span>
          <span>¥68</span>
        </p>
      </div>
    </div>
    <div class="list">
      <div class="img">123</div>
      <div class="deta">
        <p>陕西历史博物馆</p>
        <span class="des">有华夏珍宝库之称 赏唐墓壁画</span>
        <p>4.8分</p>
        <p class="adult">
          <span>成人票</span>
          <span>起</span>
          <span>¥58</span>
        </p>
        <p class="children">
          <span>儿童票</span>
          <span>起</span>
          <span>¥68</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      choose: [
        { sort: "展馆预览" },
        { sort: "文化古迹" },
        { sort: "主题乐园" },
        { sort: "自然风光" },
        { sort: "温泉泡汤" },
      ],
      address: [
        { add: "市临潼区" },
        { add: "市灞桥区" },
        { add: "市阎良区" },
        { add: "市雁塔区" },
        { add: "市碑林区" },
        { add: "市莲湖区" },
      ],
    };
  },
  methods: {
    changea(e) {
      console.log(e.target.value);
    },
  },
};
</script>

<style scoped>

.title {
  color: #333;
  text-align: center;
  /* border: 1px solid #000; */
}

.title img {
  display: flex;
  position: absolute;
  top: 15px;
}

.search {
  position: relative;
  margin-top: 13px;
  float: left;
  width: 100%;
  display: flex;
  justify-content: center;
  /* border: 1px solid #000; */
}

.search input {
  float: left;
  border: 0;
  width: 88%;
  outline: none;
  line-height: 25px;
  background-color: #f2f3f4;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-left: 50px;
}

.search img {
  position: absolute;
  float: left;
  left: 10%;
  top: 3px;
}
.select {
  margin: 10px;
  outline: 0;
  border: 0;
}
.list {
  width: 94%;
  height: 160px;
  line-height: 30px;
  display: flex;
  margin: 0 auto;
  padding-bottom: 10px;
  border: 1px solid #000;
  margin-bottom: 10px;
  border-bottom: 1px solid #e8e8e8;
}
.list .img {
  float: left;
  width: 40%;
  border: 1px solid #f00;
  border-radius: 8px;
}
.list .deta {
  border: 1px solid #0ff;
  margin-left: 10px;
  width: 62%;
}
.list .deta p:first-child {
  color: #333;
}
.list .deta .des {
  color: #ed7b30;
  background-color: #fdf4ec;
  border-radius: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
}
.list .deta p:nth-child(3) {
  color: #555;
}

.list .deta .adult span:nth-child(2),
.list .deta .adult span:last-child,
.list .deta .children span:nth-child(2),
.list .deta .children span:last-child {
  float: right;
}
.list .deta .adult span:nth-child(2),
.list .deta .children span:nth-child(2){
  color: #888;
}

.list .deta .adult span:last-child,
.list .deta .children span:last-child{
  color: #eb5130;
  padding-right: 3px;
  font-size: 21px;
}
</style>
