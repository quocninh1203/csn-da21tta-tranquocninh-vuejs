<template>
    <div class="name">
        <router-link to="/sanpham">Sản Phẩm</router-link>
        <router-link :to="this.$store.state.path">{{ this.$store.state.select }}</router-link>
    </div>
    <router-view/>
</template>

<script>

export default{
    name: 'allProductView',

}

</script>

<style scoped>
.name{
    height: 100px;
    width: 100%;
    background-color: rgb(87, 32, 24);
}
</style>