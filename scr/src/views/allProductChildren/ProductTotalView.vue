<template>
  <div class="padding">
    <paddingView></paddingView>
  </div>
  <div class="view">
    <productList :products = newdata :width = width></productList>
  </div>
</template>

<script>
import productList from '@/components/productList.vue'
import paddingView from '@/components/paddingView.vue'
export default{
  name: 'ProductTotalView',
  components: {
    productList,
    paddingView
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
.padding{
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: rgb(87, 32, 24);
}
.view{
  display: flex;
  justify-content: center;
  background-color: #fff;
  background-image: url(https://i.pinimg.com/474x/a2/d2/d4/a2d2d404c591e0cc4c5da4d6e4585e0d.jpg);
  background-repeat: repeat;
  margin: auto;
}

</style>