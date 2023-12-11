<template>
  <h2>Các món đặc sản của Miền Trung</h2>
  <div class="view">
    <productList :products = newdata></productList>
  </div>
</template>
  
<script>
import productList from '@/components/productList.vue';
export default {
  name: 'MienTrungView',
  components:{
    productList,
  },
  data() {
    return {
      id_area: 'mt',
    };
  },
  computed:{
    getdata(){
      return this.$store.state.allProduct
    },
    newdata(){
      return this.getdata.filter(product => product.id_area == this.id_area)
    }
  },
};
</script>

<style scoped>
.view{
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  
}
h2{
  text-transform: uppercase;
  color:rgb(10, 104, 255);
  padding: 30px;
  text-align: center;
  position: relative;
}
h2::before{
  content: "";
  position: absolute;
  z-index: 1;
  background-color: rgb(10, 104, 255);
  width: 600px;
  height: 2px;
  left: 15%;
  bottom: 0;
}
</style>