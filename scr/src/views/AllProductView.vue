<template>
    <div class="padding">
        <paddingView></paddingView>
    </div>
    <div :style="{display: display}" class="all">
        <productList :products = getAllproduct :width = width></productList>
    </div>
</template>

<script>
import paddingView from '@/components/paddingView.vue'
import productList from '@/components/productList.vue'
export default{
    name: 'allProductView',
    components:{
        productList,
        paddingView
    },
    computed:{
        display(){
            if(this.$store.state.select != ''){
                return this.display1
            }    
            return this.display2
        },
        getAllproduct(){
            return this.$store.state.allProduct
        }
    },
    data(){
        return{
            display1: 'none',
            display2: 'flex',
            width: '1310px'
        }
    },

}

</script>

<style scoped>
.padding{
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: rgb(87, 32, 24);
}


.all{
    justify-content: center;
    background-color: #fff;
    background-image: url(https://i.pinimg.com/474x/a2/d2/d4/a2d2d404c591e0cc4c5da4d6e4585e0d.jpg);
    background-repeat: repeat;
    margin: auto;
}
</style>