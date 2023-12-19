<template>
    <div class="name">
        <div>
            <router-link to="/sanpham" class="RouterLink" @click="resetSelect">Sản Phẩm</router-link>
            <router-link :to="this.$store.state.path" class="RouterLink">{{ this.$store.state.select }}</router-link>
        </div>
    </div>
    <div :style="{display: display}" class="all">
        <productList :products = getAllproduct :width = width></productList>
    </div>

</template>

<script>
import productList from '@/components/productList.vue'
export default{
    name: 'allProductView',
    components:{
        productList
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
    methods:{
        resetSelect(){
            this.$store.commit('updateSelect',['','/sanpham'])
        }
    }
}

</script>

<style scoped>
.name{
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: rgb(87, 32, 24);
}
.name div{
    padding-left: 50px;
    font-size: 30px;
    text-transform: uppercase;
}
.RouterLink{
    color: #fff;
}
.all{
    justify-content: center;
    background-color: #fff;
    background-image: url(https://i.pinimg.com/474x/a2/d2/d4/a2d2d404c591e0cc4c5da4d6e4585e0d.jpg);
    background-repeat: repeat;
    margin: auto;
}
</style>