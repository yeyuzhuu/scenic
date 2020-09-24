<template>
 <div>
  <div class="list" v-for="(item, index) of lists" :key="index">
   <!-- {{ item.de_id }} -->
   <div class="img">
    <router-link :to="`/details/${item.de_id}`">
     <img :src="require('../../assets/img/images/' + item.de_img)" />
    </router-link>
   </div>
   <div class="deta">
    <router-link :to="`/details/${item.de_id}`">
     <p>{{ item.de_name }}</p>
    </router-link>
    <router-link :to="`/details/${item.de_id}`">
     <span class="des">{{ item.de_des }}</span>
    </router-link>
    <p>{{ item.de_score }}</p>
    <p class="adult_child">
     <span>成人票</span>
     <span>起</span>
     <span>¥{{ item.adultPri }}</span>
    </p>
    <p class="adult_child">
     <span>儿童票</span>
     <span>起</span>
     <span>¥{{ item.childPri }}</span>
    </p>
   </div>
  </div>
 </div>
</template>
<script>
export default {
 data() {
  return {
   lists: [],
  };
 },
 methods: {},
 mounted() {
  this.axios.get("/demo3").then((res) => {
   this.lists = res.data;
  });
 },
};
</script>
<style scoped>
@import url("../../assets/css/demo.css");
</style>