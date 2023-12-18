<template>
    <div class="container-fluid">
        <div class="row">
          <div class="col-sm-2" style="background-color:lavender;">
            <nav class="navbar bg-light">
                <ul class="navbar-nav">
                  <li class="nav-item" v-for="item in getMenuArea" :key="item.index">
                    <router-link class="nav-link" :to="item.path">{{ item.name }}</router-link>
                  </li>
                </ul>
              </nav>
          </div>
          <div class="col-sm-10" style="background-color:lavenderblush;">
            <loginAccounts></loginAccounts>
          </div>
        </div>
    </div>
<!--  -->

</template>


<script>
import loginAccounts from '@/components/loginAccounts.vue'

export default {
    computed:{
        // getMenuArea(){
        //     return this.$store.state.allArea
        // }
    },
    components:{
      loginAccounts
    }
}
</script>

<style scoped>
.container-fluid{
    border-top:1px solid #ccc;
}
.row{
    height: 1000px;
}
</style>
