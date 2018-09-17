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
import appConfigs from '@/includes/api/appConfigs'

export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  components: {
    'todos-list-one':todosListOne,
    'todos-list-two':todosListTwo
  },
  computed:{
    todos(){
      return this.$store.getters.getTodos;
    },
  },
  methods:{
    setTodos:function () {
      appConfigs.getTodosApi().then(todos =>{
        this.$store.commit('setTodos',todos);
      });    
    }
  },
  created:function(){
    // this.setProducts();
    this.setTodos();
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
}
</style>
