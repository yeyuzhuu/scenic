<template>
  <div>
      <!-- 顶部导航开始 -->
     
      <!-- 顶部导航结束 -->
      <!-- 头像区域开始 -->
      <div class="avatar">
          <img src="../assets/img/touxiang.png" alt="">
      </div>
      <!-- 头像区域结束 -->
      <!-- 设置区域开始 -->
      <div>
        <mt-cell title="我的订单" isLink>
            <img src="../assets/img/dingdan.png" slot="icon">
        </mt-cell>
        <mt-cell title="个人设置" isLink>
            <img src="../assets/img/shezhi.png" slot="icon">
        </mt-cell>
        <mt-cell title="关于我们" isLink>
            <img src="../assets/img/wode.png" slot="icon">
        </mt-cell>
        <mt-cell title="退出登录" isLink>
            <img src="../assets/img/tuichu.png" slot="icon">
        </mt-cell>
      </div>
      <!-- 设置区域结束 -->
      <!-- 底部选项卡区域开始 -->
      <tabbar :selected="selected"></tabbar>
      <!-- 底部选项卡区域结束 -->
  </div>
</template>
<style scoped>
.avatar{
  margin:15px 0;
  text-align: center;
}
.avatar img{
  width: 90px;
  height:90px;
  border-radius: 100%;
}
</style>
<script>
import Tabbar from '../views/Tabbar';
export default {
  components:{
    Tabbar
  },
  data(){
    return {
      //默认被选定的底部选项卡
      selected:'me'
    }
  },  
  watch:{
    //监听底部选项卡的变化
    selected(value){
        switch(value){
           case 'index':
             this.$router.push('/');
             break;
           case 'me':
             this.$router.push('/me');
             break;
        }
    }
  }
}
</script>