<template>
  <v-container class="slider-parents bg-white">
    <v-carousel class="slider-children"
      show-arrows="hover"
      delimiter-icon="el-icon-minus"
      hide-delimiter-background
      next-icon="el-icon-arrow-right" 
      prev-icon="el-icon-arrow-left"
      cycle
      interval="2000">
      <v-carousel-item
        v-for="(item,i) in images"
        :key="i"
        :src="item.src"
        aspect-ratio="1.25"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>
  
  <script>
  export default {
    name:'sliderHome',
    props:['images'],
    data() {
      return {
        
       
      };
    },

  };
  </script>
  
  <style scoped>
.slider-children{
  background-color: #fff;
}

</style>




