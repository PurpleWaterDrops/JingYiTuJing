<template>
  <div id="ModalsComponent">
    <!-- modal for login or regist -->
    <div id="LoginOrRegistModal" class="modal fade in">
    	<div class="modal-dialog">
    		<div class="modal-content">
    			<div class="modal-header">
    				<button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
    				<div class="col-xs-12 text-center">
	        			<div class="btn-group">
						  	<button type="button" class="btn btn-default" @click="SelectedLogin">登陆</button>
						  	<button type="button" class="btn btn-default" @click="SelectedRegist">注册</button>
						</div>
    				</div>
    			</div>
    			<div class="modal-body">
    				<LoginComponent v-if="SelectedLoginFlag" />
    				<RegisterComponent v-if="SelectedRegistFlag" />
    			</div>
    		</div>
    	</div>
    </div>

    <!-- modal for city of weather -->
    <div id="showChangeCityModal" class="modal fade in">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                    <h4 class="modal-title">请填写城市:</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <div class="form-group">
                            <div class="col-xs-12">
                                <input id="CityForWeather" type="text" class="form-control" placeholder="请输入城市名(例如：北京市，请填写“北京”)" @keypress.prevent.enter="SendNewCityforWeather">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="SendNewCityforWeather">确定</button>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
	import LoginComponent from '@/components/OthersComponents/ModalsComponents/LoginComponent.vue'
	import RegisterComponent from '@/components/OthersComponents/ModalsComponents/RegisterComponent.vue'

    import { mapActions } from 'vuex'

	export default{
    	name: 'ModalsComponent',
    	data: function(){
    		return {
    			SelectedLoginFlag:true,
    			SelectedRegistFlag:false
    		}
    	},
    	components: {
    		LoginComponent,
    		RegisterComponent
    	},
    	methods:{
    		SelectedLogin:function(){
    			this.SelectedLoginFlag = true;
    			this.SelectedRegistFlag = false;
    		},
    		SelectedRegist:function(){
    			this.SelectedLoginFlag = false;
    			this.SelectedRegistFlag = true;
    		},
            ...mapActions([
                'SendNewCityforWeather'
            ])
    	}
	};
</script>

<style lang="less" scoped>

</style>