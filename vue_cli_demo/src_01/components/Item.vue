<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteComment">删除</a>
    </div>
    <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
    <p class="centence">{{comment.content}}!</p>
  </li>
</template>

<script>
  export default {
    props:{ //指定属性名和属性值的类型
      comment:Object,
      deleteItem: Function,
      index: Number
    },
    methods: {
      deleteComment (){
        const {index, comment, deleteItem} = this
        if (window.confirm('确定删除' + comment.name + '内容吗?')){
          deleteItem(index)
        }
      }
    }
  }
</script>

<style scoped>

</style>
