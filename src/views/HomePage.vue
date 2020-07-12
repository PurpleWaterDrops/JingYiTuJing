<template>
  <div id="HomePage">
    	<!-- Carousel -->
    	<CarouselComponent />
    	<!-- PicturesScropspy -->
    	<PicturesScrollspyComponent />
    	<!-- Keyword -->
    	<KeywordComponent />
  </div>
</template>

<script>
	import CarouselComponent from '../components/HomePageComponents/CarouselComponent.vue'
	import PicturesScrollspyComponent from '../components/HomePageComponents/PicturesScrollspyComponent.vue'
	import KeywordComponent from '../components/HomePageComponents/KeywordComponent.vue'

	export default{
		name: 'HomePage',
		components: {
			CarouselComponent,
			PicturesScrollspyComponent,
			KeywordComponent
		}
	};
</script>

<style lang="less" scoped>

</style>
