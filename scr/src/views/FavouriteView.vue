<template>
  <div class="padding">
    <paddingView :name = name></paddingView>
  </div>
  <div class="title">
    <h2  :style="{ textTransform: 'capitalize' }">Sản phẩm yêu thích</h2>
  </div>
  <v-container>
    <v-card class="height">
      <v-card-text>
        <div class="font-weight-bold ms-1 mb-2">
          History
        </div>

        <v-timeline density="compact" align="start">
          <v-timeline-item
            v-for="favourite in favouriteList"
            :key="favourite.id_product"
            dot-color="green"
            size="x-small"
          >
            <!-- <router-link :to="{name: 'productdetail', 
              params: { pathChildren: encodeURIComponent(`${favourite.id_area}-${favourite.id_product}`)}}"
              class="custom-link"
            > -->
              <div class="mb-4">
                <div class="font-weight-normal">
                  <strong>{{ favourite.time }}</strong>
                </div>
                
                <v-card class="d-flex">
                  <!-- left -->
                  <v-card>
                    <v-img
                    :src="favourite.url" cover @click="selectProduct(favourite,favourite.name)"
                    height="200" width="250">
                    </v-img>
                  </v-card>

                  <!-- middle -->
                  <v-list-item class="mb-2" :subtitle="favourite.id_product" width="700">
                    <template v-slot:title>
                        <strong class="text-h6 mb-2">{{ favourite.name }}</strong>
                    </template>
                    <v-card-text>
                      <v-icon icon="el-icon-money" start></v-icon>
                      Giá tham khảo: {{ favourite.price }}&#8363;
                    </v-card-text>
                  </v-list-item>

                  <!-- right -->
                  <div class="d-flex justify-center align-center">
                    <v-btn 
                    icon="el-icon-delete" class="bg-red" @click="favourite.favourite = !favourite.favourite">
                    </v-btn>
                  </div>
                </v-card>
              </div>
            <!-- </router-link> -->
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-container>

</template>



<script>
import paddingView from '@/components/paddingView.vue';
  export default {
    name: 'favouriteView',
    components:{
      paddingView
    },
    data(){
      return{
        name: `/ ${this.$store.state.allMenu[3].name}`
      }
    },
    computed:{
      getAllProduct(){
        return this.$store.state.allProduct
      },
      favouriteList(){
        return this.getAllProduct.filter(item => item.favourite == true)
      },
    },
    methods:{
      selectProduct(value1,value2){
        this.$store.commit('productIsRunningUpdate',value1)

        this.$store.commit('updateProductSelect',['/ '+value2,value1.id_product])
        console.log(this.$store.state.productIsRunning);
      },
    }

  }
</script>


<style scoped>

.padding{
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
}
.height{
  min-height: 294px;
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
.custom-link{
  text-decoration: none;
}
</style>
