<template>
  <headingApp></headingApp>
  <router-view/>
  <component_text :text="text"></component_text>
</template>


<script>
import headingApp from './components/App/headingApp.vue'
import component_text from './components/component_text.vue';
export default{
  name:'App',
  components:{
    headingApp,
    component_text
  },
  data(){
    return{
      text: [
        {name: '1'},
        {name: '2'},
        {name: '3'},
        {name: '4'},
        {name: '5'},
      ]
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
}

</style>



