<template>
    <div class="view">
      <productList :products = products_mb></productList>
    </div>
  </template>
  
  <script>
  import productList from '@/components/productList.vue'
  export default{
    name: 'MienBacView',
    components: {
      productList,
  
    },
    data(){
          return{
              products_mb : [
                {name: 'thịt trâu gác bếp',url: 'https://taybac.tv/wp-content/uploads/2022/10/DSC00196-scaled.jpg'},
                {name: 'bánh đậu xanh hải dương',url: 'https://static.ecosite.vn/3359/news/2018/05/11/banh-dau-xanh-hai-duong-1526033002.jpg'}
              ],
              
          }
      }
  }
  </script>
  
  <style scoped>
  .view{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    
  }
  
  </style>