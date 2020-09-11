<template>
    <div class="orderDate">
		<button class="date">
			<router-link to="/orderdetail">
				<img src="../assets/img/order/left.png">
			</router-link>
			<p>日期选择</p>
		</button>
        <!-- <mt-cell class="date" isLink to="/">日期选择</mt-cell> -->
        <div class="classify">
            <h3 class="ticket">门票种类</h3>
            <mt-button class="adult" type="danger">成人票</mt-button>
            <mt-button>儿童票</mt-button>
			<!-- 切换成人票和儿童票，①日历上不同天数对应的价格发生变化②使用日期下的月份发生变化 -->
        </div>
        <div class="warning">
            <p>服务</p>
            <div>
                <p class="use_warning">
					<img class="use_warning_img" src="../assets/img/order/tishi.png">使用提示
				</p>
				<p>16:30前可订今日票 平均一分钟出票 出票后可立即使</p>
				<p>用 (营业时间内)</p>
            </div>    
        </div>
		<div class="time">
			<p class="use_date">使用日期：2020-09-10</p>
			<!-- 日历表上点击某一天后，使用日期动态变化，默认无 -->
			<div class="calendar">
				<div class="date_header">
					<div class="month">9月</div>
				</div>
				<div class="date_content">
					<div class="week_header">
						<!-- 星期数组必须使用单引号 -->
						<div v-for="(item,index) of ['日','一','二','三','四','五','六']"
							:key="index">
							{{item}}
						</div>
					</div>
					<div class="week_day">
						<div class="everyday active"
							v-for="(item,index) of 31"
							:key="index"
						>{{item}}
							<div class="everyday_price">¥65</div>
						</div>
					</div>                   
				</div>
			</div>
		</div>
		<div class="order_buy">
			<div class="buy_action_count">
				<p class="num_tit">购买数量</p>
				<div class="kc">
					<span>库存200件</span>
					<button class="sub">-</button>
					<input class="order_num" value="1">
					<button class="add">+</button>
				</div>
			</div>
			<!-- <div class="zf">
				<p class="price">¥65</p>
				<button class="buy_action">立即购买</button>
			</div> -->
		</div>
		<div class="zf">
			<!-- 日历表上点击某一天，价格动态变化，默认价格区间 -->
			<p class="price">¥55~65</p>
			<router-link to="/orderwrite"> 
				<button class="buy_action">立即购买</button>
			</router-link>
		</div>
    </div>
</template>
<style>
	@import url("../assets/css/OrderDate.css")
</style>