<template>
  <div id="HeaderNavbarComponent">
  	<nav class="navbar navbar-default">
  		<div class="container">

  			<!-- Brand and toggle get grouped for better mobile display -->
		    <div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapseContent">
					<span class="glyphicon glyphicon-menu-hamburger"></span>
				</button>
				<router-link class="navbar-brand" to="/indexpage" tag="a">
			      	鲸益图鲸
			    </router-link>
		    </div>

		    <!-- Collect the nav content for toggling -->
		    <div class="collapse navbar-collapse" id="collapseContent">
		    	<!-- OptionsComponent -->
		    	<OptionsComponent />
		    	<!-- UserIDComponent -->
		    	<UserIDComponent />
		    	<!-- WeatherComponent -->
		    	<WeatherComponent />
		    	<!-- SearchComponent -->
		    	<SearchComponent />
		    </div>

  		</div>
  	</nav>
  </div>
</template>

<script>
	import OptionsComponent from '@/components/OthersComponents/HeaderNavbarComponents/OptionsComponent.vue'
	import SearchComponent from '@/components/OthersComponents/HeaderNavbarComponents/SearchComponent.vue'
	import WeatherComponent from '@/components/OthersComponents/HeaderNavbarComponents/WeatherComponent.vue'
	import UserIDComponent from '@/components/OthersComponents/HeaderNavbarComponents/UserIDComponent.vue'

	export default{
		name: 'HeaderNavbarComponent',
		components: {
			OptionsComponent,
			SearchComponent,
			WeatherComponent,
			UserIDComponent
		}
	};
</script>

<style lang="less" scoped>
	#HeaderNavbarComponent{
		nav{
			margin: 0;
			border: none;
			a{
				margin: 5px 0;
				font-family: "楷体",serif;
				font-size: 30px;
				&:hover{
					color: purple;
				}
			}
		}
	}

</style>