<template>
<div class="thebox">
  <onTopApp></onTopApp>
  <headingApp></headingApp>
  <router-view/>
  <footerApp></footerApp>
</div>
</template>

<script>
import headingApp from './components/App/headingApp.vue'
import onTopApp from './components/App/onTopApp.vue'
import footerApp from './components/App/footerApp.vue'
export default{
  name:'App',
  components:{
    headingApp,
    onTopApp,
    footerApp,
  },
}
</script>
<!-- import JavaScript -->

<style scoped>
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
.thebox{
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Tối thiểu chiều cao 100% của viewport */
}

</style>



