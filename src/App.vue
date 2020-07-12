<template>
	<div id="app" >
    	<!-- webPage header navbar-->
    	<HeaderNavbarComponent />
    	<!-- webPage body -->
        <router-view class="animate__animated animate__fadeIn" />
    	<!-- webPage footer navbar -->
    	<FooterNavbarComponent />
    	<!-- modal component -->
    	<ModalsComponent />
	</div>
</template>

<script>
	import HeaderNavbarComponent from '@/components/OthersComponents/HeaderNavbarComponents/HeaderNavbarComponent.vue'
	import FooterNavbarComponent from '@/components/OthersComponents/FooterNavbarComponents/FooterNavbarComponent.vue'
	import ModalsComponent from '@/components/OthersComponents/ModalsComponents/ModalsComponent.vue'

	export default{
    	name: 'App',
    	components: {
    		HeaderNavbarComponent,
    		FooterNavbarComponent,
    		ModalsComponent
    	}
	};
</script>

<style lang="less" scoped>

</style>
