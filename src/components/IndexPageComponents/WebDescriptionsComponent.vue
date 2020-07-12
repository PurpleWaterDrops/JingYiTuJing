<template>
	<div id="WebDescriptionsComponent">
		<div id="Descriptions" class="container">
			<div class="row">
				<div class="col-xs-12 text-center page-header">
					<h1>打造世界领先的图片资源共享平台</h1>
					<p>鲸益图鲸为您提供丰富、高品质、低价格的图片资源及服务。</p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-6 col-sm-3 text-center">
					<div id="DescriptContainer">
						<img id="DescriptionImage" src="@/assets/others/indexPage/description1.png" alt="DescriptionImage">
						<div id="DescriptContent">
							近亿张高清正版图片资源。
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-3 text-center">
					<div id="DescriptContainer">
						<img id="DescriptionImage" src="@/assets/others/indexPage/description2.png" alt="DescriptionImage">
						<div id="DescriptContent">
							全方位的版权服务。
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-3 text-center">
					<div id="DescriptContainer">
						<img id="DescriptionImage" src="@/assets/others/indexPage/description3.png" alt="DescriptionImage">
						<div id="DescriptContent">
							个性化资源财产管理平台。
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-3 text-center">
					<div id="DescriptContainer">
						<img id="DescriptionImage" src="@/assets/others/indexPage/description4.png" alt="DescriptionImage">
						<div id="DescriptContent">
							营销一站式解决方案。
						</div>
					</div>
				</div>
			</div>
			<hr>
			<div class="row">
				<div class="col-xs-12 text-center">
					<h1>满足需求、追求卓越</h1>
					<p>从丰富的图片展示到灵活的资源管理，以精益求精的态度为您提供最舒适优质的视觉和操作体验。</p>
					<router-link id="IndexFooterBtnToStart" to="/homepage" tag="button">开始浏览主页 <span class="glyphicon glyphicon-arrow-right"></span></router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'WebDescriptionsComponent'
	};
</script>

<style lang="less" scoped>
	#WebDescriptionsComponent{
		#Descriptions{
			.row{
				margin-bottom: 35px;
			    #DescriptContainer{
			    	// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			    	margin: 5px 5px 10px 5px;
			    	padding: 0;
			    	&:hover{
			    		transform: translateY(-5px);
			    	}
			    	#DescriptionImage{ 
				    	width: 100%;
				        height: auto;
				    }
				    #DescriptContent{
				    	font-family: "楷体",serif;
				    	font-weight: 700;
						font-size: 20px;
				    }
			    }
			    #IndexFooterBtnToStart{
			    	border: 1px solid #0027ffa3;
			    	border-radius: 5px;
			    	font-weight: 400;
			    	font-size: 20px;
			    	background-color: white;
			    	&:hover{
			    		background-color: #0027ffa3;
			    		color: white;
			    	}

			    }
			}

		}
	}
</style>