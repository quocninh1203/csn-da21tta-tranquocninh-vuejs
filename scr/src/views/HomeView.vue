<template>
  <sliderHome :images = listItemImages></sliderHome>
  <div v-for="(item, index) in getCategory" :key="index">
    <productCategory :category = item></productCategory>
  </div>
</template>

<script>
// import components
import sliderHome from '@/components/banner/slider.vue'
import productCategory from '@/components/productCategory.vue';
//import images

export default {
  name: 'HomeView',
  components: {
    sliderHome,
    productCategory,
  },
  computed: {
    listItemImages(){
      return this.$store.state.allArea
    },
    getCategory(){
      return this.$store.state.allCategory
    }
  }
}
</script>


<style>

</style>
