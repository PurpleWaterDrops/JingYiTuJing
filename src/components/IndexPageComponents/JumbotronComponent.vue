<template>
	<div id="JumbotronComponent">
		<div id="Jumbotron" class="jumbotron">
		  <div class="container text-center">
		    <img id="LogoImage" src="@/assets/others/indexPage/logo.png" alt="logo">
		    <h2>宅在家，看世界！</h2>
		    <h4>欢迎来到鲸益图鲸！</h4>
		    <router-link to="/homepage" tag="button">现在开始</router-link>
		  </div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'JumbotronComponent'
	};
</script>

<style lang="less" scoped>
	#JumbotronComponent{

		#Jumbotron{
			max-height: 600px; 
			background-image: url('../../assets/others/indexPage/background.png');
			margin-bottom: 50px; 
			h2{
				color: white;
				font-weight: 500;
				text-shadow: -5px -5px 4px grey;
			}
			h4{
				color: white;
				font-weight: 500;
				text-shadow: -5px -5px 4px grey;
			}
			button{
				border: 1px solid white;
				border-radius: 5px;
				background-color: #f5f5f500;
				color: white;
				font-weight: 500;
				&:hover{
					background-color: #f5f5f5;
					color: black;
				}
			}
		}

	}

	// response design
	@media only screen and (max-width: 700px){
	    #LogoImage {
	        width: 100px;
	        height: auto;
	    }
	    
	}
</style>