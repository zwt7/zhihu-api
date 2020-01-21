<template>
  <div id="app">
 
    <router-view class="main"/>
  </div>
</template>

<style lang="scss">
	// 通过import引入外部样式，这样有些样式可以共享
	@import url("assets/css/basic.css");
	@import url("assets/css/style.css");
#app {
	.main{
		background-color: #f6f6f6;
	}
}
</style>
