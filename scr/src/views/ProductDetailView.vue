<template>
  <div class="padding">
    <paddingView></paddingView>
  </div>

</template>
<script>
import paddingView from '@/components/paddingView.vue'
export default{
  name: 'productDetail',
  components:{
    paddingView
  },
  computed:{
    getAll(){
      return this.$store.state.allProduct
    },
    getProductIsSelect(){
      return this.$store.state.productIsRunning
    },
    newdata(){
      return this.getAll.filter(product => product.id_product == this.getProductIsSelect)
    }
  },
}
</script>   

<style scoped>
.padding{
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: rgb(87, 32, 24);
}

</style>