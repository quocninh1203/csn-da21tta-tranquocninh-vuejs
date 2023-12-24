<template>
  <div class="main-padding">
    <router-link to="/sanpham" class="RouterLink" @click="resetSelect">Sản Phẩm</router-link>
    <router-link :to="this.$store.state.path" class="RouterLink">{{ this.$store.state.select }}</router-link>
</div>
</template>
  
<script>
export default {
methods:{
      resetSelect(){
          this.$store.commit('updateSelect',['','/sanpham'])
      }
  }
}
</script>

<style scoped>
.RouterLink{
  color: #fff;
}
.main-padding{
  padding-left: 50px;
  font-size: 30px;
  text-transform: uppercase;
}
</style>
  