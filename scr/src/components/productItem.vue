<template>
<router-link :to="{name: 'productdetail', 
    params: { pathChildren: encodeURIComponent(`${product.id_area}-${product.id_product}`)}}"
    class="custom-link">
    <v-card class="pb-3" border flat width="200" @click="selectProduct(product,product.name)">
                        <!-- Imgage product -->
        <v-img :src="product.url"></v-img>
                        <!-- Title product -->
        <v-list-item class="mb-2" :subtitle="product.id_product">
                        <!-- Name product -->
            <template v-slot:title>
                <strong class="text-h6 mb-2">{{ product.name }}</strong>
            </template>
        </v-list-item>
                        <!-- Price and button readmore -->
        <div class="d-flex justify-space-between px-4">
            <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                        <!-- Price -->
                <v-icon icon="el-icon-money" start></v-icon>
                <div class="text-truncate">{{ product.price }}&#8363;</div>
            </div>
                        <!-- Button readmore -->
             <v-btn border flat size="small" class="text-none" text="Xem thêm">
            </v-btn>
        </div>
    </v-card>
</router-link>
</template>


<script>
export default{
    name: 'productItem',
    props:['product'],
    data(){
        return{

        }
    },
    methods:{
        selectProduct(value1,value2){
            this.$store.commit('productIsRunningUpdate',value1)

            this.$store.commit('updateProductSelect',['/ '+value2,value1.id_product])
            console.log(this.$store.state.productIsRunning);
        },
    },
    computed:{
    menuList(){
        return this.$store.state.allMenu
    }
    },
}
</script>

<style scoped>
.custom-link{
    text-decoration: none;
}

.item{
    height: 350px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    background-color: #fff;
}
.item img{
    width: 245px;
    height: 200px;
}
.item img:hover{
    opacity: 0.7;
    cursor: pointer;
}
.item:hover{
    border: 1px solid #1B5E20;
}
.content-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
}
.name-content{
    flex: 2;
    font-size: 20px;
    color: #1B5E20;
    font-weight: bolder;
    text-align: center;
    text-transform: capitalize;
}
.price{
    flex: 1;
}
.price div{
    color:  #fff;
    font-size: 20px;
    font-weight: bolder;
    height: 100%;
    width: 150px;
    text-align: center;
    border: 1px solid  #1B5E20;
    background-color: #1B5E20;
}   
.price div:hover{
    cursor: pointer;
    color:  #1B5E20;
    background-color: #fff;
}

</style>