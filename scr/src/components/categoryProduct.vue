<template>
    <v-card class="card-main">

                            <!-- Max is 4 product -->
        <v-data-iterator :items="items" :items-per-page="4">
          <template v-slot:default="{ items }">
            <v-container class="pa-2" fluid>
              <v-row dense class="row-1">
                            <!-- Button view -->
                <router-link :to="{name: 'producttotal', params: { pathParent: encodeURIComponent(categoryIsRunning.path) }}">
                  <v-btn @click="selectArea('/'+categoryIsRunning.name,categoryIsRunning.path,categoryIsRunning.id_area)"
                  append-icon="el-icon-view" variant="flat" color="purple">View all</v-btn>
                </router-link>
              </v-row>
              <v-row dense>
                            <!-- Grid col = 3/12 and repeat col-->
                <v-col v-for="item in items" :key="item.id_product" cols="auto" md="3">
                            <!-- Router link of product -->
                <RouterLink :to="{name: 'productdetail', 
                    params: { pathChildren: encodeURIComponent(`${item.raw.id_area}-${item.raw.id_product}`) }}" 
                    class="custom-link"> 
                  <v-card class="pb-3" border flat @click="chosseSelectProduct(item.raw.name,item.raw.id_product,item.raw)">
                            <!-- Imgage product -->
                    <v-img :src="item.raw.url"></v-img>
                            <!-- Title product -->
                    <v-list-item class="mb-2" :subtitle="item.raw.id_product">
                            <!-- Name product -->
                      <template v-slot:title>
                        <strong class="text-h6 mb-2">{{ item.raw.name }}</strong>
                      </template>
                    </v-list-item>
                            <!-- Price and button readmore -->
                    <div class="d-flex justify-space-between px-4">
                      <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                            <!-- Price -->
                        <v-icon icon="el-icon-money" start></v-icon>
                        <div class="text-truncate">{{ item.raw.price }}&#8363;</div>
                      </div>
                            <!-- Button readmore -->
                      <v-btn border flat size="small" class="text-none" text="Xem thêm">
                      </v-btn>
                    </div>
                  </v-card>
                </RouterLink>
                </v-col>
              </v-row>
            </v-container>
          </template>
                            <!-- Buttons next and prev page -->
          <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
            <div class="d-flex align-center justify-center pa-4">
              <v-btn
                :disabled="page === 1"
                icon="el-icon-caret-left"
                density="comfortable"
                variant="tonal"
                rounded
                @click="prevPage"
              ></v-btn>
    
              <div class="mx-2 text-caption">
                Page {{ page }} of {{ pageCount }}
              </div>
    
              <v-btn
                :disabled="page >= pageCount"
                icon="el-icon-caret-right"
                density="comfortable"
                variant="tonal"
                rounded
                @click="nextPage"
              ></v-btn>
            </div>
          </template>
        </v-data-iterator>
      </v-card>
</template>

<script>

export default{
    props:{
        categoryIsRunning: Object,
    },
    computed:{
      listItemProduct(){
      return this.$store.state.allProduct
    },
      items(){
        return this.listItemProduct.filter(item => item.id_area == this.categoryIsRunning.id_area);
      },

    },
    methods:{
        selectArea(value,path,id_area){
            this.$store.commit('updateAreaSelect',[ value, path])
            this.$store.commit('areaIsRunningUpdate',id_area)
        },
        chosseSelectProduct(value1,path,value){
          this.$store.commit('updateProductSelect',['/ '+value1,path])
          this.$store.commit('productIsRunningUpdate',value)
          console.log(this.$store.state.productIsRunning);
        }
    }
}
</script>

<style scoped>
.custom-link{
    text-decoration: none;
}
.card-main{
    width: 1200px;
}
.row-1{
  display: flex;
  justify-content: flex-end;
}

</style>