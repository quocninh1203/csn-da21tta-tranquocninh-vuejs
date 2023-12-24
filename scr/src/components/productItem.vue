<template>
    <router-link :to="{name: 'productdetail', 
    params: { pathChildren: encodeURIComponent(`${product.id_area}-${product.id_product}`) }}">
    <div class="item" @click="selectProduct(product.id_product)">
        <img :src="product.url"  class="rounded">
        <div class="content-item">
            <p class="name-content">{{ product.name }}</p>
            <div class="price">
                <div>{{ product.price }} &#8363;</div>
            </div>
            <i class="unit">Đơn vị tính: 1 cái/1 đơn vị</i>
        </div>
    </div>
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
        selectProduct(value){
            this.$store.commit('productIsRunningUpdate',value)
        }
    }
}
</script>

<style scoped>
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
    border: 1px solid rgb(87, 32, 24);
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
    color: rgb(87, 32, 24);
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
    border: 1px solid  rgb(87, 32, 24);
    background-color: rgb(87, 32, 24);
}   
.price div:hover{
    cursor: pointer;
    color:  rgb(87, 32, 24);
    background-color: #fff;
}
.unit{
    flex: 1;
    color: #000;
}
</style>