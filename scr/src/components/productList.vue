<template>
    <div class="list">
        <productItem :product=products></productItem>
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
    },
    computed: {

    }
}
</script>


<style scoped>
.list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    width: 810px;

}
</style>