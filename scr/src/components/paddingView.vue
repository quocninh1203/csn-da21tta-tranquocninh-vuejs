<template>
  <div class="main-padding">
    <router-link to="/" class="RouterLink level1" @click="resetSelect">Trang chủ</router-link>
    <router-link :to="this.$store.state.path" class="RouterLink level2" @click="chosseSelect0">&#160;{{ this.names }} </router-link>
    <router-link :to="this.$store.state.pathAreaSelect" class="RouterLink level3" @click="resetProductSelect">&#160;{{ this.$store.state.areaSelect }} </router-link>
    <a class="RouterLink level4">&#160;{{ this.$store.state.productSelect }} </a>
</div>
</template>
<!-- this.$store.state.select -->
  
<script>
export default {
  props:['name'],
  data(){
    return{
      names: this.chooseName()
    }
  },
  computed:{
    menuList(){
        return this.$store.state.allMenu
    },
  },
  methods:{
    chosseSelect0(){
      this.$store.commit('updateSelect',['/ '+this.menuList[0].name,this.menuList[0].path])
      this.$store.commit('updateAreaSelect',['',''])
      this.$store.commit('updateProductSelect',['',''])
    },
    resetSelect(){
      this.$store.commit('updateSelect',['',''])
      this.$store.commit('updateAreaSelect',['',''])
      this.$store.commit('updateProductSelect',['',''])
    },
    resetProductSelect(){
      this.$store.commit('updateProductSelect',['',''])
    },
    chooseName(){
      if(this.$store.state.path != '')
        return this.$store.state.select
      else
        return this.name
    }
  }
}
</script>

<style scoped>
.RouterLink{
  color: #1B5E20;
  font-weight: bolder;
  text-decoration: none;
}

.main-padding{
  padding-left: 50px;
  font-size: 18px;
  text-transform: uppercase;
}
</style>
  