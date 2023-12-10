<template>
    <ul class="sub-navigation" :style="{width:width, backgroundColor:styleList.backgroundColor}">
        <li class="item-navigation" v-for="item in dropdownList" :key="item.id" :style="{fontWeight:styleList.fontWeight, fontSize:styleList.fontSize}"
        >
            <router-link :to="item.link" class="RouterLink" :style="{color:styleList.color}" >{{ item.name }}</router-link>
        </li>
    </ul>
</template>

<script>
import myMinxin from '@/components/allData.vue'
export default{
    name: 'menuDropdown',
    mixins: [myMinxin],
    props:{
        dropdownList: Array,
        styleList: Array,
        width: String,
    },
    data(){
        return{
            newdata: ''
        }
    },


}
</script>



<style scoped>
.sub-navigation{
    position: absolute;
    z-index: 1;
    background-color: #fff;
    list-style: none;
    top: 90px;
    left: 0;
    width: 100%;
    opacity: 1;
    padding: 0;margin: 0;
    box-shadow: 0 2px 2px 0 #ccc;
}
.item-navigation{
    padding: 10px 20px;
}
.RouterLink{
    text-decoration: none;
    color: rgb(87, 32, 24);
}
.item-navigation:hover .RouterLink{
    color:brown;
}

</style>