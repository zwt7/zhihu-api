<template>
	<div class="nav-gutter">
		<div class="nav-bar">
			<ul class="nav-list">
				<li class="nav-item"><router-link to="/home">首页</router-link></li>
				<li class="nav-item"><router-link to="/explore">发现</router-link></li>
				<li class="nav-item"><router-link to="/question/waiting">等你来答</router-link></li>
				<li class="nav-item abs-center-right"><router-link to="/login">登录</router-link></li>
			</ul>
		</div>
		<!-- 二级路由入口 -->
		<router-view/>
	</div>
</template>

<script>
	export default{
		name:"nav",
		data(){
			return{};
		},
		created(){}
	}
</script>

<style lang="scss" scoped>
	a{
		color: #fff;
		text-decoration: none;
	}
	.router-link-active{
		color: yellow;
		border-bottom: 2px solid #fff;
	}
	*{
		margin: 0;
		padding: 0;
	}
	.nav-gutter{
		position:relative;
		margin-bottom: 10px;
		.nav-bar{
			width: 100%;
			height: 50px;
			background-color: royalblue;
			.nav-list{
				position: absolute;
				top: 0;
				left: 80px;
				width: 80%;
				height: 50px;
				line-height: 50px;
				.nav-item{
					list-style: none;
					float: left;
					margin-left: 100px;
				}
				.nav-item.abs-center-right{
					margin-left: 400px;
				}
			}
		}
	}
</style>
