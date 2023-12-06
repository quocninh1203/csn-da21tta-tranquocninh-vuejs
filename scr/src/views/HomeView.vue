<template>
  <sliderHome :images = listItemImages></sliderHome>
  <productCategory ></productCategory>
</template>

<script>
// import components
import sliderHome from '@/components/banner/slider.vue'
import productCategory from '@/components/productCategory.vue';
//import images
import pic1 from "@/assets/banner/mienbac.jpg";
import pic2 from "@/assets/banner/mientrung.jpg";
import pic3 from "@/assets/banner/miennam.jpg";
export default {
name: 'HomeView',
components: {
  sliderHome,
  productCategory,
},
data(){
  return{
    listItemImages:[
      {name: 'Miền Bắc', link: '/mienbac',src: pic1, alt: "núi phía Bắc"},
      {name: 'Miền Trung', link: '/mientrung',src: pic2, alt: "Cung Đình Huế" },
      {name: 'Miền Nam', link: '/miennam',src: pic3, alt: "Cần Thơ"},
    ],

  }
}
}
</script>


<style>

</style>
