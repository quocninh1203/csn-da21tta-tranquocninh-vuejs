<template>
    <div class="item">
        <img :src="product.url" :alt="product.name">
        
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
    height: 200px;
    width: 250px;
    border: 1px solid #fff;
    
}
.item img{
    height: 100%;
    width: 100%;
}
</style>