<template>
  <div id="app">
    <router-view></router-view>
    <Main></Main>
  </div>
</template>

<script>
import stuRegister from './views/student/stuRegister'
import Main from './components/Main'
export default {
  name: 'App',
  components: {
    Main,
    stuRegister
  }
}
</script>

<style>
</style>
