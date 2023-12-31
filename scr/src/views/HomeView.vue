<template>
<div class="home-main">
  <div class="padding">
    <paddingView></paddingView>
  </div>
  <div class="carousel">
    <sliderHome :images = listItemImages></sliderHome>
  </div>

  <div class="category-main" :class="`bg-${this.bg[item.index]}`" v-for="item in listItemImages" :key="item.index">
    <h1 class="category-name">Đặc sản {{ item.name }}</h1>
    <categoryProduct :categoryIsRunning = item></categoryProduct>
  </div>
</div>

</template>

<script>
// import components
import sliderHome from '@/components/banner/slider.vue'
import categoryProduct from '@/components/categoryProduct.vue';
import paddingView from '@/components/paddingView.vue';
//import images

export default {
  name: 'HomeView',
  components: {
    sliderHome,
    categoryProduct,
    paddingView,
  },
  data(){
    return{
      width: '1290px',
      tab: null,
      page: 1,
      bg:[
        'white',
        'yellow-lighten-5',
        'white'
      ]
    }
  },
  computed: {
    listItemImages(){
      return this.$store.state.allArea
    },
    getdata(){
      return this.$store.state.allProduct
    }

  }
};

</script>


<style scoped>
.category-main{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100vw;
  padding-bottom: 20px;
}
.category-name{
  color: #1B5E20;
  margin-top: 20px;
}

.home-main{
  background-image: url(https://3.bp.blogspot.com/-k8W7UwkacXw/U-J-qTkel1I/AAAAAAAAGdE/T-69E0WNcJk/s1600/repeating-vintage-paper-background.jpg);
  background-repeat: repeat;
}
.carousel{
  padding: 20px 0;
}
.padding{
  background-color: #fff;
  height: 80px;
  display: flex;
  align-items: center;
  width: 100%;
}
.div2{
  height: 60px;
  background-color: #1B5E20;
  
}
</style>
