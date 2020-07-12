<template>
	<div id="SearchComponent">
	  	<form id="SearchComponentContainer" class="navbar-form navbar-right">
			<div class="input-group input-group-lg">
	  			<!-- dorpdown for watching pictures -->
				<div id="dropdown" class="input-group-btn dropdown">
					<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">分类 <span class="caret"></span> </button>
			        <ul class="dropdown-menu">
			          <li> <a href="#" title="scenery">风景</a> </li>
			          <li> <a href="#" title="animal">动物</a> </li>
			          <li> <a href="#" title="food">美食</a> </li>
			          <li> <a href="#" title="cartoon">动漫</a> </li>
			        </ul>
				</div>
				<!-- input for searching pictures -->
				<input type="search" class="form-control" placeholder="Search for...">
				<!-- btn for startting search -->
		      	<div class="input-group-btn">
		       		<button type="button" class="btn btn-default">
		       			<span class="glyphicon glyphicon-search"></span>
		       		</button>
		      	</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
    	name: 'SearchComponent',
    	mounted: ()=>{
    		var windowWidth = $(window).width();
    		if(windowWidth <= 500){
            	$("#dropdown").removeClass("dropdown").addClass("dropup");
    		}
    	}
	};
</script>

<style lang="less" scoped>
	#SearchComponentContainer{
		margin-right: 5px;
	}
</style>