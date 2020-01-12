<template>
  <div class="hello">
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // 必须写函数
  data () {
    return {
      msg: 'Hello ListenerSun'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .msg{
    color: red;
  }
</style>
