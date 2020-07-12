<template>
	<div id="CopyrightComponent">
		<div class="text-center">
			<img src="@/assets/others/footerNav/nationalFlag.png">中文简体
		</div>
		<p>
			版权声明：所有图片均受著作权保护，未经许可不得使用、转载、摘编。版权所有&nbsp; xxx公司 此网站同时服务于《xxx公司》
		</p>
		<p>
			网络文化经营许可证京网文xxx号&nbsp;京ICP证xxx号&nbsp;自营主体经营证照   京公网安备xxx号&nbsp;京ICP备xxx号-2
		</p>
	</div>
</template>

<script>
	export default{
		name: 'CopyrightComponent'
	};
</script>

<style lang="less" scoped>
	#CopyrightComponent{
		div{
			margin-bottom: 10px;
			img{
				width: 18px;
				height: auto;
				border-radius: 100%;
			}
		}
	}
</style>