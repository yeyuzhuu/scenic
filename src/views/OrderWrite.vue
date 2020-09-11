<template>
	<div class="order_page">
		<button class="page_link">
			<router-link to="/orderdate">
				<img src="../assets/img/order/left.png">
			</router-link>
			<p>填写订单</p>
		</button>
		<div class="order_write">
			<table></table>
			<div class="order_msg">
				<p>[翠华山国家地质公园-大门票]陕西西安旅游翠华山森林公园门票</p>
				<ul class="order_msg_list">
					<li>收费项目</li>
					<li>入园日期</li>
					<li>有效期</li>
				</ul>
				<ul class="order_msg_name">
					<li>大门票</li>
					<!-- 入园日期根据日期选择页面中 购买数量 动态变化-->
					<li>2020-09-18</li>
					<li>指定入园日期当日可用</li>
				</ul>
				<div class="adult_buy">
					<span class="adult_ticket">成人票</span>
					<button class="adult_sub">-</button>
					<!-- 数量①根据日期选择页面中购买数量②-+符号 动态变化-->
					<input class="adult_order_num" value="1">
					<button class="adult_add">+</button>
					<div>
						<p>预定须知</p>
						<img src="../assets/img/order/right.png">
					</div>
					<div class="price_">单价：<span>¥55.00</span></div>
				</div>
				<div class="adult_buy child_buy">
					<span class="adult_ticket">儿童票</span>
					<button class="adult_sub">-</button>
					<!-- 数量①根据日期选择页面中购买数量②-+符号 动态变化-->
					<input class="adult_order_num" value="1">
					<button class="adult_add">+</button>
					<div class="price_1">单价：<span>¥30.00</span></div>
				</div>
			</div>
			<div class="customer_msg">
				<span>买家留言</span>
				<input type="text" value="选填,请先和商家协商一致">
			</div>
			<div class="get_ticket">
				<p>
					<span class="get_ticket_msg">取票信息</span>
					<span class="get_warning">仅需添加1位取票人用于接收取票信息</span>
				</p>
				<div>
					<span class="get_human">取票人</span>
					<input type="text">
					<button class="choose_human">选择取票人</button>
				</div>
				<div>
					<span class="get_human_name">姓名</span>
					<input class="real_name" type="text" value="请输入证件上的实际姓名">
				</div>
				<div>
					<span class="get_human_phone">手机号码</span>
					<input class="real_phone" type="text" value="请输入手机号,用于接收信息">
				</div>
			</div>
			<div class="explain_msg">
				<p>-更多服务 为您保障-</p>
				<p>闪电出票 无需换票 不用可退</p>
			</div>
		</div>
		<div class="go_pay">
			<!-- 价格根据①根据日期选择页面中购买数量②上面button增减框动态变化-->
			<span class="pay_price">¥55.00</span>
			<!-- <span class="pay_msg">明细</span> -->
			<button>
				<router-link to="/orderdetaile">去付款</router-link>
			</button>
		</div>
	</div>
</template>

<script>
</script>

<style>
	@import url("../assets/css/OrderWrite.css");
</style>
