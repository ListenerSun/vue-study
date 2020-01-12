<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    使用映射组件-->
    <HelloWorld/>
  </div>
</template>

<script>
// 引入组件
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  /* 映射组件 */
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
