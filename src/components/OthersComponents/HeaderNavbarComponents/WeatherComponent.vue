<template>
	<div id="WeatherComponent">
		<div id="WeatherComponentContainer" class="nav navbar-nav navbar-right">
			<!-- city and change city -->
			<p id="CityAndChange">
				<span> {{city}} </span>
				<a @click="showChangeCityModal"> 切换城市 </a>
			</p>
			<!-- weather info -->
			<p id="WeatherInfo">

			</p>
		</div>
	</div>    
</template>

<script>
	import { mapGetters,mapActions } from 'vuex'

	export default{
  		name: 'WeatherComponent',
  		computed: {
  			...mapGetters([
		      	'city',
		    ])
  		},
  		methods: {
  			...mapActions([
  				'showChangeCityModal'
  			])
  		},
  		mounted:function(){
  			$.get('simpleWeather/query?key=a5a06fcaec974fd88d1ed53ad79abb7b&city='+this.city, function(data) {
		    	$('#WeatherInfo').text(data.result.realtime.info+'/'+data.result.realtime.temperature+'摄氏度');
		    },'json');
  		}
	};
</script>

<style lang="less" scoped>
	#WeatherComponentContainer{
		margin: 10px 5px 10px 0;
		p{
			margin: 0;
		}
	}
</style>