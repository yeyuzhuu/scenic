<template >
    <div class="container">
       <!-- 导航栏 -->
      <div class="header1">
          <div>
            <img src="../assets/img/back4.png" alt="">
            <span>订单详情</span>
          </div>
          <div>
              <img src="../assets/img/search2.png" alt="">
          </div>
     </div> 
     <!-- 订单列表 -->
     <router-link to="/orderdetail">
        <div class="order_list">
            <div class="list_top">
                <p>
                 <img src="../assets/img/log.png" alt="">
                 <span>西安新浪潮国旅</span>
                  <img src="../assets/img/right.png" alt="">
                </p>
                <p>已发货</p>
            </div>
            <div class="list_center">
                <div>
                    <img src="../assets/img/list1.jpg" alt="">
                </div>
                <div class="tang">
                    <p>[中国唐苑门票]立即发码 西安唐苑 中国唐苑</p>
                    <p>出行日期：9月10日</p>
                </div>
                <p>￥45.00</p>
            </div>
            <div class="list_bottom" >
                <span>共1件，合计</span>
                <span>￥45.00</span>
            </div>
        </div>
      </router-link>
    </div>
</template>
<style scoped>
   .container{
    background-color:rgb(235, 235, 240);
    height:750px;
    }
    .header1{
    width:100%;
    height:42px;
    padding-left:13px;
    line-height: 42px;
    background-color:white;
    display: flex;
    justify-content: space-between;
    padding-bottom:45px;
    border-bottom:1px solid rgb(216, 213, 210);
  }
  .header1 img{
    vertical-align: middle; 
    margin-right:10px;
  }
  .header1 span{
    font-weight: 600;
  }
  .order_list{
      width:96%;
      height:200px;
      background-color:white;
      margin:10px auto 0;
      padding: 10px;
      border-radius: 10px;
  }
  .order_list>.list_top,.order_list>.list_center{
      display: flex;
      justify-content: space-between;
      margin-bottom:15px;
  }
  .order_list>div img{
      vertical-align: middle;
      margin-right:10px;
  }
  .list_top>p img:last-child{
      width:20px;
      height:20px;
  }
  .list_top>p span{
      margin-right:3px;
      font-size:15px;
  }
   .list_top p:last-child{
       font-size:15px;
       color:rgb(247, 169, 1);
   }
 .list_center img{
     width:100px;
     border-radius: 5px;
 }
 .tang{
     padding-right:10px;
 }
 .list_center>p{
     font-size:14px;
 }
 .tang>p:first-child{
     height:50px;
     margin-bottom:27px;
     -webkit-line-clamp: 4;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	 text-overflow: ellipsis;
	overflow: hidden;
 }
 .tang>p:last-child{
     font-size:15px;
     color:rgb(190, 188, 185);
 }
  .list_bottom{
     text-align: right;
 }
 .list_bottom>span:first-child{
     font-size:14px;
 }
  a{text-decoration: none; color:black}
</style>