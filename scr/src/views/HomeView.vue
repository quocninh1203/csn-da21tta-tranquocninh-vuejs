<template>
    <sliderHome></sliderHome>
    <productList></productList>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import sliderHome from '@/components/banner/slider.vue'
import productList from '@/components/productList.vue'
export default {
  name: 'HomeView',
  components: {
    sliderHome,
    productList
  },
  data(){
    return{
      listItem:[
        {name: 'TRÀ VINH', url: ''},
        {name: 'TIỀN GIANG', url: ''},
        {name: 'BẠC LIÊU', url: ''},
        {name: 'ĐỒNG THÁP', url: ''},
        {name: 'BẠC LIÊU', url: ''},
        {name: 'LONG AN', url: ''},
        {name: 'CÀ MAU', url: ''},
        {name: 'AN GIANG', url: ''},
        {name: 'HẬU GIANG', url: ''},
        {name: 'CẦN THƠ', url: ''},
      ],
    }
  }
}
</script>


<style>

</style>
