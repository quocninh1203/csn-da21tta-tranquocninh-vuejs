<template>
  <sliderHome></sliderHome>
  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import sliderHome from '@/components/banner/slider.vue'

export default {
name: 'HomeView',
components: {
  sliderHome,

},
data(){
  return{
    listItem:[
      {name: 'Miền Bắc', url: ''},
      {name: 'Miền Trung', url: ''},
      {name: 'Miền Nam', url: ''},

    ],
  }
}
}
</script>


<style>

</style>
