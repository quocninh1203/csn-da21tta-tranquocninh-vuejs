<template>
    <div class="list">
        <productItem  v-for="item in compareId" :key="item.id" :product = item ></productItem>
    </div>
</template>


<script>
import productItem from '@/components/productItem'
export default{
    name: 'productList',
    components:{
        productItem,
    },
    props: {
        products: Array,
        selectId: String
    },
    computed:{
        compareId(){
            if(this.selectId == 'all' || this.selectId == null)
                return this.products
            else
                return this.products.filter(product => product.id == this.selectId)
        }
    }
}
</script>


<style scoped>
.list{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 810px;
    
}
</style>