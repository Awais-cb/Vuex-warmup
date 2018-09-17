<template>
  <div id="app">
    <todos-list-one></todos-list-one>
    <todos-list-two></todos-list-two>
    <ul>
      <li v-for="todo in todos">
        {{todo}}
      </li>
    </ul>
  </div>
</template>

<script>
import todosListOne from './components/todosListOne'
import todosListTwo from './components/todosListTwo'
// import appConfigs from '@/includes/api/appConfigs'

export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  computed:{
    todos(){
      return this.$store.state.todos.then(data=>{
        return data;
      });
    }
  },
  components: {
    'todos-list-one':todosListOne,
    'todos-list-two':todosListTwo
  },
  created:function(){
    console.log(this.$store.state.todos);
    console.log(this.$store.state.userid);
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
}
</style>
