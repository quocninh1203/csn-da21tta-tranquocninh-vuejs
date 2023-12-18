<template>
    <div class="list-item" :style="{width: width}">
        <template v-for="item in products" :key="item.id_product">
            <productItem :product=item></productItem>
        </template>
    </div>
</template>


<script>
import productItem from '@/components/productItem'

export default {
    name: 'productList',
    components: {
        productItem,
    },
    props: {
        products: Array,
        width: String
    },
    computed: {

    }
}
</script>


<style scoped>
.list-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    min-width: 810px;
    margin: 20px auto;
}
</style>