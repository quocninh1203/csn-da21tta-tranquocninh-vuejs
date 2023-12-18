<template>
    <h1 class="test">{{ newdata[0].name }}</h1>
</template>
<script>
export default{
  name: 'productDetail',
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
.test{
    background-color: aqua;
}
</style>