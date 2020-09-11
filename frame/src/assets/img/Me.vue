<template>
  <div>
    我的
    <tabbar :select="select"></tabbar>
  </div>
</template>
<script>
import tabbar from "../views/Tabbar";
export default {
  components: { tabbar },
  data(){
    return{
      select:"me"
    }
  }
};
</script>
<style scoped>

</style>