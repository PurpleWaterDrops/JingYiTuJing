<template>
	<div id="CarouselComponent">
		<div id="carousel" class="carousel slide">

			<ol class="carousel-indicators">
				<li data-target="#carousel" data-slide-to="0" class="active"></li>
				<li data-target="#carousel" data-slide-to="1"></li>
				<li data-target="#carousel" data-slide-to="2"></li>
				<li data-target="#carousel" data-slide-to="3"></li>
				<li data-target="#carousel" data-slide-to="4"></li>
			</ol>

			<div class="carousel-inner">
				<div class="item active">
					<img id="_image" src="@/assets/carousel/0.png">
					<div id="_carousel-caption" class="carousel-caption">
					    <p>有机会的话，真想来一场说走就走的旅行。</p>
					</div>
				</div>
				<div class="item">
					<img id="_image" src="@/assets/carousel/1.png">
					<div id="_carousel-caption" class="carousel-caption">
					    <p>我们一起学猫叫，一起喵喵喵喵喵~</p>
					</div>
				</div>
				<div class="item">
					<img id="_image" src="@/assets/carousel/2.png">
					<div id="_carousel-caption" class="carousel-caption">
					    <p>美味的蛋糕，你要不要来一块呢？</p>
					</div>
				</div>
				<div class="item">
					<img id="_image" src="@/assets/carousel/3.png">
					<div id="_carousel-caption" class="carousel-caption">
					    <p>开这样的跑车出去兜风一定很过瘾吧！</p>
					</div>
				</div>
				<div class="item">
					<img id="_image" src="@/assets/carousel/4.png">
					<div id="_carousel-caption" class="carousel-caption">
					    <p>“你知道吗?樱花飘落的速度,是每秒五厘米。”</p>
					</div>
				</div>
			</div>

			<div>
				<a href="#carousel" data-slide="prev" class="carousel-control left">
					<span class="glyphicon glyphicon-chevron-left"></span>
				</a>
				<a href="#carousel" data-slide="next" class="carousel-control right">
					<span class="glyphicon glyphicon-chevron-right"></span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
    	name: 'CarouselComponent',
    	mounted:()=>{
			$('#carousel').carousel({
			  interval: 5000,
			  pause: 'hover',
			  wrap: true,
			  keyboard: true
			})
		}
	};
</script>

<style lang="less" scoped>
	#_image{
		display: block;
	}
	#_carousel-caption{
		font-family: '楷体' , serif;
		font-weight: 600px;
		p{
			font-size: 20px;
		}
	}
</style>