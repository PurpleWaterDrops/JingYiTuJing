<template>
  <div id="IndexPage">
    
  	<!-- jumbotron -->
  	<JumbotronComponent />

	<!-- WebDescriptions -->
	<WebDescriptionsComponent />

  </div>
</template>

<script>
	import JumbotronComponent from '@/components/IndexPageComponents/JumbotronComponent.vue'
	import WebDescriptionsComponent from '@/components/IndexPageComponents/WebDescriptionsComponent.vue'

	export default{
		name: 'IndexPage',
		components: {
			JumbotronComponent,
			WebDescriptionsComponent
		}
	};
</script>

<style lang="less" scoped>
	
</style>