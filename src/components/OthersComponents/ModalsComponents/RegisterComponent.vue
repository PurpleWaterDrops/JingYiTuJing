<template>
	<div id="RegisterComponent">
		<form class="form-horizontal">
			<div class="form-group">
				<div class="col-xs-12">
    				<input id="UsernameForRegist" type="text" class="form-control" placeholder="请设置用户名...">
    			</div>
			</div>
			<div class="form-group">
				<div class="col-xs-12">
    				<input id="PasswordForRegist" type="password" class="form-control" placeholder="请设置密码...">
    			</div>
			</div>
			<div class="form-group">
				<div class="col-xs-8">
    				<input id="UserTelephoneNumber" type="tel" class="form-control" placeholder="请填写手机号用于接收验证码...">
    			</div>
    			<div class="col-xs-4">
    				<button type="button" class="btn btn-primary form-control" @click="SendReqforVeficationCode">发送验证码</button>
    			</div>
			</div>
			<div class="form-group">
				<div class="col-xs-12">
    				<input id="VerificationCodeForRegist" type="text" class="form-control" placeholder="请填写接收的验证码...">
    			</div>
			</div>
			<div class="form-group">
				<div class="col-xs-12">
    				<button type="button" class="btn btn-primary form-control" @click="RegistByUserinfo">立即注册</button>
    			</div>	
			</div>
		</form>	
	</div>
    
</template>

<script>
	import { mapActions } from 'vuex'

	export default{
  		name: 'RegisterComponent',
  		methods: {
  			...mapActions([
  				'RegistByUserinfo',
  				'SendReqforVeficationCode'
  			])
  		}
	};
</script>

<style lang="less" scoped>

</style>