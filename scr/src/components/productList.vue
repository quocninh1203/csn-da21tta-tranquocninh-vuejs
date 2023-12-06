<template>
    <div class="list">
        <productItem  v-for="(item, index) in products" :key="index" :product = item></productItem>
    </div>
</template>


<script>
import productItem from '@/components/productItem'
export default{
    name: 'productList',
    components:{
        productItem,
    },
    props: ['products']
}
</script>


<style scoped>
.list{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 750px;
    
}
</style>