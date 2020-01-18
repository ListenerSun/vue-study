<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"></Add>
      <List :comments="comments"></List>
    </div>
  </div>
</template>

<script>
// 引入组件
import Add from './components/Add'
import List from './components/List'

export default {
  /* 映射组件 */
  components: {
    Add,
    List
  },
  data (){
    return {
      comments:[ //数据在哪个组件中,更新数据的行为(方法)就应该定义在哪个组件中
        {
          name: 'Listener',
          content: 'I Am ListenerSun'
        },
        {
          name: 'WBY',
          content: 'I Am WBY'
        },
        {
          name: 'XTP',
          content: 'I am XTP'
        }
      ]
    }
  },
  methods:{
    //添加评论
    addComment(comment){
      this.comments.unshift(comment)
    }
  }
}
</script>

<style>
</style>
