<template>
  <div id="OptionsComponent">
  		<ul class="nav navbar-nav">
  			<li>
  				<router-link to="/homepage" tag="a">首页</router-link>
  			</li>
  		</ul>
  </div>
</template>

<script>
  export default{
    name: 'OptionsComponent'
  };
</script>

<style lang="less" scoped>

  ul{
    li{
      margin: 5px 0;
      a{
        font-size: 18px;
      }
    }
  }
</style>