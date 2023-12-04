<template>
    <div class="list">
        <productItem></productItem>
    </div>
</template>


<script>
import productItem from '@/components/productItem'
export default{
    name: 'productList',
    components:{
        productItem,
    },
    data(){
        return{
            products : [
                {},
                {},
                {},
                {},
                {},
                {},
            ]
        }
    }
}
</script>