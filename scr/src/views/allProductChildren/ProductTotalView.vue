<!-- {{ this.name[0].name }} -->
<template>
  <div class="padding">
    <paddingView></paddingView>
  </div>
  <div class="title">
    <h2 :style="{ textTransform: 'capitalize' }">Sản phẩm {{ this.name[0].name }}</h2>
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
    },
    getSelect(){
      return this.$store.state.select
    },
    getAllMenu(){
      return this.$store.state.allMenu
    },
    newMenu(){
      return this.getAllMenu.filter(item => item.name == this.getSelect)
    },
    name(){
      return this.$store.state.allArea.filter(item => item.id_area == this.getAreaIsSelect)
    }
  },

}
</script>

<style scoped>
.padding{
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #fff;
}
.view{
  display: flex;
  justify-content: center;
  background-color: #fff;
  margin: auto;
}
.title{
  width: 100vw;
  height: auto;
  border-top: 1px solid #c0c0c0;
}
.title h2{
  background-color: #1B5E20;
  color: #fff;
  height: 50px;
  width: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
</style>