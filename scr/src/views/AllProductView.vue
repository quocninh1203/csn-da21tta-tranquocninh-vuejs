<template>
    <div class="padding">
        <paddingView :name = name></paddingView>
        <v-card-text>
            <v-text-field
              :loading="loading"
              density="compact"
              variant="solo"
              label="Nhập giá trị cần tìm"
              single-line
              hide-details
              v-model="search"
              width = 200
              class="dcm"
              v-if="block"
            ></v-text-field>
        </v-card-text>
        <v-btn icon="el-icon-search" @click="block = !block">
        </v-btn>
    </div>
    <div class="title">
        <h2 :style="{ textTransform: 'capitalize' }">Tất cả sản phẩm</h2>
    </div>
    <div :style="{display: display}" class="all">
        <productList :products = getAllproduct :width = width></productList>
    </div>
</template>

<script>
import paddingView from '@/components/paddingView.vue'
import productList from '@/components/productList.vue'
export default{
    name: 'allProductView',
    components:{
        productList,
        paddingView
    },
    computed:{
        getAllproduct(){
            if(this.search != '')
                return this.$store.state.allProduct.filter(product => product.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(this.search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) == true)
            return this.$store.state.allProduct
        }
    },
    data(){
        return{
            width: '1310px',
            name: `/ ${this.$store.state.allMenu[0].name}`,
            search: '',
            block: false
        }
    },

}

</script>

<style scoped>
.dcm{
    width: 200px;
    float: right;
}
.padding{
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    background-color: #fff;
}

.all{
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