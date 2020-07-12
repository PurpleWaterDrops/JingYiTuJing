<template>
	<div id="FooterNavbarComponent">
  		<nav class="navbar navbar-default">
  			<div class="container">

  				<div id="logo" class="row">
  					<div class="col-xs-12 text-center">
  						<img id="logo" src="@/assets/others/footerNav/logo.png" alt="logo">
  					</div>
  				</div>

  				<div id="webinfo" class="row text-center">
  					<div class="col-xs-4 col-sm-2 text-center">
  						<CompanyProfileComponent />
  					</div>
  					<div class="col-xs-4 col-sm-2 text-center">
  						<TermsOfServiceComponent />
  					</div>
  					<div class="col-xs-4 col-sm-2 text-center">
  						<PurchasePlanComponent />
  					</div>
  					<div class="col-xs-4 col-sm-2 text-center">
  						<ContributorServicesComponent />
  					</div>
  					<div class="col-xs-4 col-sm-2 text-center">
  						<FrendlyLinkComponent />
  					</div>
  					<div class="col-xs-4 col-sm-2 text-center">
  						<ContactUsComponent />
  					</div>
  				</div>

  				<div id="Copyright" class="row">
  					<div class="col-xs-12 text-center">
  						<CopyrightComponent />
  					</div>
  				</div>

  			</div>
  		</nav>
	</div>
</template>

<script>
  import CompanyProfileComponent from '@/components/OthersComponents/FooterNavbarComponents/CompanyProfileComponent.vue'
  import TermsOfServiceComponent from '@/components/OthersComponents/FooterNavbarComponents/TermsOfServiceComponent.vue'
  import PurchasePlanComponent from '@/components/OthersComponents/FooterNavbarComponents/PurchasePlanComponent.vue'
  import ContributorServicesComponent from '@/components/OthersComponents/FooterNavbarComponents/ContributorServicesComponent.vue'
	import FrendlyLinkComponent from '@/components/OthersComponents/FooterNavbarComponents/FrendlyLinkComponent.vue'
  import ContactUsComponent from '@/components/OthersComponents/FooterNavbarComponents/ContactUsComponent.vue'
	import CopyrightComponent from '@/components/OthersComponents/FooterNavbarComponents/CopyrightComponent.vue'

	export default{
    	name: 'FooterNavbarComponent',
    	components: {
        CompanyProfileComponent,
        TermsOfServiceComponent,
        PurchasePlanComponent,
        ContributorServicesComponent,
        FrendlyLinkComponent,
        ContactUsComponent,
        CopyrightComponent
    	}
	};
</script>

<style lang="less" scoped>
  #logo{
    margin: 10px auto;
  }
  #webinfo{
    margin: 20px auto;
    div{
      height: 150px;
    }
  }
  #Copyright{
    margin: 10px auto;
  }
</style>