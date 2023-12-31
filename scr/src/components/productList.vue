<template>
    <div class="list-item">
        <v-container  class="pa-2 one" fluid>
            <v-row dense>
                <v-col v-for="item in products" :key="item.id_product" cols="auto" md="2">
                    <productItem :product=item></productItem>
                </v-col>
            </v-row>
        </v-container>
        <!-- <template v-for="item in products" :key="item.id_product">
            <productItem :product=item></productItem>
        </template> -->
        <!-- :style="{width: width}" -->
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
.one{
    width: 1240px;
}
</style>