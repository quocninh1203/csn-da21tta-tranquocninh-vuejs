<template>
    <div class="item">
        <img :src="product.url" alt="product.name">
    </div>
</template>


<script>

export default{
    name: 'productItem',
    
    props:['product']
}
</script>

<style scoped>
.item{
    height: 50px;
    width: 50px;
    border: 1px solid #000;
    background-color: aliceblue;
}
.item img{
    height: 100%;
    width: 100%;
}
</style>