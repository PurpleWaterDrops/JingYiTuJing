<template>
	<div id="LoginComponent">
		<form class="form-horizontal">
			<div class="form-group">
				<div class="col-xs-12">
    				<input id="UsernameForLogin" type="text" class="form-control" placeholder="请输入用户名...">
    			</div>
			</div>
			<div class="form-group">
				<div class="col-xs-12">
    				<input id="PasswordForLogin" type="password" class="form-control" placeholder="请输入密码...">
    			</div>
			</div>
			<div class="form-group">
				<div class="col-xs-12">
    				<button type="button" class="btn btn-primary form-control" @click="LoginByUserinfo">登陆</button>
    			</div>	
			</div>
		</form>	
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

 	export default{
   		name: 'LoginComponent',
   		methods: {
   			...mapActions([
   				'LoginByUserinfo'
   			])
   		}
 	};
</script>

<style lang="less" scoped>
	
</style>