<template>
  <div class="view">
    <productList :products = newdata :width = width></productList>
  </div>
</template>

<script>
import productList from '@/components/productList.vue'
export default{
  name: 'ProductTotalView',
  components: {
    productList,
  },
  data(){
    return{
      width: '1310px'
    } 
  },
  computed:{
    getAll(){
      return this.$store.state.allProduct
    },
    getAreaIsSelect(){
      return this.$store.state.areaIsRunning
    },
    newdata(){
      return this.getAll.filter(product => product.id_area == this.getAreaIsSelect)
    }
  },

}
</script>

<style scoped>
.view{
  display: flex;
  justify-content: center;
  background-color: #fff;
  margin: auto;
}

</style>