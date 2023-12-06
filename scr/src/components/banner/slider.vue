<template>
    <div id="demo" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li v-for="(image, index) in images" :key="index" :data-target="'#demo'" :data-slide-to="index" :class="{ active: index === currentIndex }"></li>
      </ul>
  
      <!-- The slideshow -->
      <div class="carousel-inner">
        <div  v-for="(image, index) in images" :key="index" :class="{ 'carousel-item': true, active: index === currentIndex }">
          <img :src="image.src" :alt="image.alt" width="1100" height="500">
        </div>
      </div>
  
      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev" @click="prevSlide">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next" @click="nextSlide">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </template>
  
  <script>
  import pic1 from "@/assets/banner/banner1.jpg";
  import pic2 from "@/assets/banner/banner2.jpg";
  import pic3 from "@/assets/banner/banner3.jpg";
  //import travinh from "@/assets/banner/tv.png";
  
  export default {
    name:'sliderHome',
    data() {
      return {
        images: [
          { src: pic1, alt: "" },
          { src: pic2, alt: "" },
          { src: pic3, alt: "" },

        ],
        currentIndex: 0,
       
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex =
          this.currentIndex > 0
            ? this.currentIndex - 1
            : this.images.length - 1;
      },
      
    },
    computed:{
      
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    width: 100vw; /* Điều chỉnh kích thước của carousel */
    height: 79vh; /* Điều chỉnh chiều cao của carousel */
    margin: 0 auto; /* Căn giữa theo chiều ngang và chiều dọc */
    display: flex; /* Sử dụng display flex để căn giữa */
    flex-direction: column; /* Đảm bảo các phần tử trong carousel căn giữa theo chiều dọc */
    justify-content: center; /* Căn giữa theo chiều dọc */
  }

  .carousel-inner img {
    width: 100%;
    min-width: 800px;
    height: auto; /* Điều chỉnh kích thước của hình ảnh trong carousel */
  }

  ul li {
    height: 5px;
    width: 30px; /* Điều chỉnh kích thước của chỉ mục (indicators) */
    margin:10px;
  }


</style>




