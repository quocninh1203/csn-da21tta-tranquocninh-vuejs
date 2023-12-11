<template>
    <div>
        <h2 class="name-category">{{ category.name }}</h2>
        <productList :products = products_Of_category></productList>
    </div>
</template>

<script>
import productList from './productList.vue';
export default{
    name: 'productCategory',
    components:{
        productList,
    },
    props:{
        category: Array,
    },
    computed:{
        getdata(){
            return this.$store.state.allProduct
        },
        products_Of_category(){
            return this.getdata.filter(product => product.id_category == this.category.id_category)
        }
    }
}
</script>