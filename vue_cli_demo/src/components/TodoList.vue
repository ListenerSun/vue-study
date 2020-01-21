<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>

<script>
  import TodoItem from './TodoItem'

  export default {
    components: {
      TodoItem
    },
    props: {
      todos: Array
    }
  }
</script>


<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }


</style>
