<template>
<div>
  <sliderHome :images = listItemImages></sliderHome>
</div>
</template>

<script>
// import components
import sliderHome from '@/components/banner/slider.vue'
//import images

export default {
  name: 'HomeView',
  components: {
    sliderHome,
  },
  data(){
    return{
      width: '1290px',
    }
  },
  computed: {
    listItemImages(){
      return this.$store.state.allArea
    },
    getCategory(){
      return this.$store.state.allCategory
    }
  }
};

</script>


<style scoped>


</style>
