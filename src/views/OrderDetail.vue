<template>
  <div class="container">
    <!-- 导航栏 -->
     <div class="header1">
      <img src="../assets/img/back4.png" alt="">
      <span>订单详情</span>
    </div>
    <div class="mein">
    <!-- 使用凭证 -->
    <div class="cost_voucher">
       <div class="cost">
         <p>已发货</p>
         <div>
           <!-- 动态获取 -->
          <p>实付金额:￥45.00</p>
          <p>费用明细</p>
         </div>
       </div>
       <div class="voucher">
          <p>使用凭证</p> 
          <p class="ma">确认码（共1张）</p>
          <p class="num">265590814</p>
          <p>未使用</p>
       </div>
      </div>
    <!-- 详情 -->
      <div class="detaile">
        <!-- 动态获取 -->
        <div>[中国唐苑门票]</div>
        <div class="notice">
          <ul>
            <li>开始入园日期</li>
            <li>有效期</li>
            <li>使用方式</li>
            <li>入园方式</li>
            <li>换票地址</li>
            <li>入园地址</li>
            <!-- 动态获取 -->
            <li>成人票</li>
            <li>卖家</li>
          </ul>
          <ul>
            <!-- 动态获取 -->
            <li>202-09-10 星期四</li>
            <!-- 动态获取 -->
            <li>仅2020-09-10当天有效</li>
            <li>凭数字码换票直接入园</li>
            <li>凭数字码换票直接入园</li>
            <li>景区售票处（取票时间：9:00-16:30)</li>
            <li>景区入口</li>
            <li>￥45 x 1份</li>
            <li>西安新浪潮国旅</li>
          </ul>
        </div>
        </div>
      </div>
    <!-- 购票人信息 -->
      <div class="spectator">
        <p>取票人信息</p>
        <div class="spectator_flex">
         <ul>
           <li>姓名</li>
           <li>手机号</li>
         </ul>
          <ul>
           <!-- 动态获取 -->
           <li>张三</li>
           <li>18254215245</li>
         </ul>
        </div>
      </div>
    <!--服务说明 --> 
      <div class="serve">
        <p>
          <img src="../assets/img/log.png" alt="">
          <span class="hua">花花</span> |
          <span class="fu">服务说明</span>
        </p>
        <div class="draw">
          <div>
            <img src="../assets/img/yes.png" alt="">
          </div>
          <div>
            <p>出票保障</p>
            <p>订单生效后，商家未在规定时间内按照订单或约定内容出票且影响买家使用的，商家赔付买家商品实际成交金额的30%（但最高不超过500元）。</p>
          </div>
        </div>
        <div class="enter">
          <div>
            <img src="../assets/img/yes.png" alt="">
          </div>
          <div>
            <p>入园保障</p>
            <p>订单生效后，因商家原因导致买家无法正常使用门票，买家可以在景区市购买场价价票入园，差价由商家承担，同时商家还需要赔偿买家商品实际成交金额的30%（但最高不超过500元）。</p>
          </div>
        </div>
      </div>

    </div>
</template>
<style scoped>
  .container{
    background-color:rgb(235, 235, 240);
  }
   .header1{
    width:100%;
    height:42px;
    padding-left:13px;
    line-height: 42px;
    background-color:white;
    position: fixed;
    top:0;
    right:0;
    left:0;
    z-index:999;
  }
  .mein{
    margin-top:42px;
  }
  .header1>img{
    vertical-align: middle; 
    margin-right:10px;
  }
  .header1>span{
    font-weight: 600;
  }
  .cost_voucher{
    position: relative;
    margin-bottom:5px;
  }
  .cost{
    width:100%;
    height:110px;
    background-color:rgb(247, 210, 1);
    padding: 10px 15px 0;
  }
  .cost>p{
    font-size:20px;
    font-weight:500;
    margin-bottom:3px;
  }
  .cost>div{
    display:flex;
    justify-content: space-between;
    font-size:13px;
    font-weight:bold;
  }
  .voucher{
    width:95%;
    height:150px;
    border-radius:5px;
    margin: 0 auto;
    background-color:white;
    position: absolute;
    top:65px;
    left:10px;
    padding:10px;
  }
  .voucher>p:first-child{
    padding-bottom:10px;
    border-bottom:1px solid rgb(216, 213, 210);
    font-size:8px;
    margin-bottom:15px;
  }
  .ma{
     font-size:8px;
     margin-bottom:15px;
  }
  .num{
    font-size:18px;
    font-weight:400;
  }
  .voucher>p:last-child{
    font-size:8px;
    color:rgb(247, 169, 1);
    padding-bottom:10px;
    border-bottom:1px solid rgb(221, 218, 215);
  }
  .detaile{
    width:95%;
    height:265px;
    margin:0 auto;
    border-radius: 5px;
    background-color:white;
    margin-top:115px;
    padding: 10px;
  }
  .detaile>div:first-child{
    font-size:14px;
    margin-bottom:10px;
    font-weight: bold;
  }
  .notice,.spectator_flex{
    display: flex;
  }
  ul{list-style: none;margin-right:34px;}
  li{
    margin-bottom:10px;
    font-size:12px;
  }
  .spectator{
    width:95%;
    height:90px;
    margin:0 auto;
    border-radius: 5px;
    margin-top:10px;
    background-color:white;
    padding: 10px;
    margin-bottom:10px;
  }
  .spectator>p{
     font-size:14px;
    margin-bottom:10px;
    font-weight: bold;
  }
   .spectator>ul{
     margin-right:58px;
   }
   .serve{
     width:100%;
     height:400px;
     background-color:white;
     padding: 20px 10px;
     
   }
    .serve>p{
      text-align: center;
      margin-bottom:50px;
      height:40px;
    }
    .hua{
      font-size:15px;
      font-weight: bold;
    }
    .fu{
      font-size:18px;
      font-weight: 600;
    }
    img{
      vertical-align: middle;
    }
    .draw,.enter{
      display:flex;
    }
    .draw>div>p:first-child,.enter>div>p:first-child{
      font-size:15px;
      margin-bottom:10px;
      font-weight: 600;
    }
    .draw>div,.enter>div{
       margin-right:20px;
    }
    .draw>div>p:last-child,.enter>div>p:last-child{
       font-size:13px;
       margin-bottom:50px;
    }
    .draw>div>img,.enter>div>img{
      width:15px;
    }
</style>