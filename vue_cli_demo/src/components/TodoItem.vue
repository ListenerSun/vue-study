<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.select"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="deleteItem" v-show="isShow">删除</button>
  </li>

</template>
<script>
  export default {
    props: {
      todo: Object,
      index: Number,
      deleteTodo: Function
    },
    data (){
      return {
        bgColor: 'white',
        isShow: false
      }
    },
    methods: {
      handleEnter(isEnter) {
        if (isEnter){
          this.bgColor = 'gray'
          this.isShow = true
        } else {
          this.bgColor = 'white'
          this.isShow = false
        }
      },
      //删除 项目
      deleteItem (){
        const {todo,index,deleteTodo} = this
        if(window.confirm(`确认删除${todo.title}吗?`)){
          deleteTodo(index)
        }
      }

    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 0px;
    padding: 8px 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

</style>
