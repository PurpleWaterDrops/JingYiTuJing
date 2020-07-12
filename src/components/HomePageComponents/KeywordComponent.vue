<template>
	<div id="KeywordComponent">
		<div id="panel" class="panel panel-danger">
			<div class="panel-heading">
				<h4 class="text-warning">关键词：</h4>
			</div>
			<div class="panel-body">
				<ul class="list-unstyled list-inline">
					<li> <a href="#">老虎</a> </li>
					<li> <a href="#">蛋糕</a> </li>
					<li> <a href="#">赛车</a> </li>
					<li> <a href="#">猫咪</a> </li>
					<li> <a href="#">越野</a> </li>
					<li> <a href="#">森林</a> </li>
					<li> <a href="#">瀑布</a> </li>
					<li> <a href="#">老鹰</a> </li>
					<li> <a href="#">蓝天</a> </li>
					<li> <a href="#">夏目友人帐</a> </li>
					<li> <a href="#">小狗</a> </li>
					<li> <a href="#">言叶之庭</a> </li>
					<li> <a href="#">大海</a> </li>
					<li> <a href="#">摩托车</a> </li>
					<li> <a href="#">水果</a> </li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'KeywordComponent'
	};
</script>

<style lang="less" scoped>
	#keywordComponent{
		margin: 20px 0;
		#panel{
			background-color: #11c4f138;
		}
	}

	@media only screen and (max-width: 500px){
        
    }
</style>