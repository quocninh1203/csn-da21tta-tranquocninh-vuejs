<template>
  <headingApp></headingApp>
  <router-view/>
</template>


<script>
import headingApp from './components/App/headingApp.vue'

export default{
  name:'App',
  components:{
    headingApp,
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
footer{
  height: 100px;
  bottom: 0;
}
</style>



