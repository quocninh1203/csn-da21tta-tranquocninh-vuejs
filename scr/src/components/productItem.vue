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
    margin: 10px;
}
.item img{
    height: 100%;
    width: 100%;
}
.item img:hover{
    opacity: 0.7;
    cursor: pointer;
}
</style>