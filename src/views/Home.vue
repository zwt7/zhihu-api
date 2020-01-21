<template>
  <div class="home">
		<div class="title">
			<ul>
				<li class="home-list"><router-link to='Recommend'>推荐</router-link></li>
				<li class="home-list"><router-link to='Follow'>关注</router-link></li>
				<li class="home-list"><router-link to='Hot'>热榜</router-link></li>
			</ul>
		</div>
		<div class="grey"></div>
		<!-- 三级路由入口 -->
		<router-view/>
  </div>
</template>

<script>
	export default{
		name:"home",
		data(){
			return{};
		},
		created(){}
	}
</script>

<style lang="scss" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	a{
		color: black;
		text-decoration: none;
	}
	.router-link-active{
		color: blue;
	}
	.home{
		background-color: #fff;
		width:40%;
		height:100%;
		margin-left: 220px;
	}
	.grey{
		width: 100%;
		height:10px;
		background-color:#EBEBEB;
	}
	.title{
		width:60%;
		height: 40px;
		.home-list{
			list-style: none;
			float: left;
			line-height:40px;
			margin-left: 20px;
		}
	}
	
</style>
