<template>
	<div id="UserIDComponent">
		<div id="UserIDComponentContainer" class="nav navbar-nav navbar-right">
			<!-- head sculpture -->
			<div id="HeadSculpture">
				<img src="@/assets/others/headerNav/defaultUserHeadSculpture.png" alt="HeadSculpture">
			</div>
			<!-- username or userid-->
			<div id="UsernameOrUserid">
				<span v-if="!LoginState">未登录</span>
				<span v-if="LoginState">UserID</span>
			</div>
			<!-- options for login or logout -->
			<div id="LoginOrLogout">
				<a v-if="!LogoutState" @click="showLoginOrRegistModal">登陆/注册</a>
				<a v-if="LogoutState">登出/注销</a>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default{
		name: 'UserIDComponent',
		data: function(){
			return {
				LoginState: false,
				LogoutState: false
			}
		},
		methods: {
			...mapActions([
				'showLoginOrRegistModal'
			])
		}
	};
</script>

<style lang="less" scoped>
	#UserIDComponentContainer{
		padding-left: 15px;
	}

	#HeadSculpture{
		display: inline-block;
		border: 3px double grey;
		border-radius: 50%;
		width: 50px;
		height: 50px;
		margin: 5px 5px 5px 0px;
		img{
			width: 100%;
			height: auto;
		}
	}
	#UsernameOrUserid{
		margin: 5px 5px 5px 0px;
		display: inline-block;
	}
	#LoginOrLogout{
		margin: 5px 5px 5px 0px;
		display: inline-block;
	}
</style>