<template>
    <div class="name">
        <h1>Sản Phẩm{{ data }}</h1>
    </div>
<router-view/>
</template>

<script>
import myMinxin from '@/components/allData.vue'
export default{
    name: 'allProductView',
    mixins: [myMinxin],
}

</script>

<style scoped>
.name{
    height: 100px;
    width: 100%;
    background-color: rgb(87, 32, 24);
}
</style>