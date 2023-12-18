<template>
    <ul class="sub-navigation" :style="{width:width, backgroundColor:styleList.backgroundColor}">
        <li class="item-navigation" v-for="(item, index) in dropdownList" :key="index" 
        :style="{fontWeight:styleList.fontWeight, fontSize:styleList.fontSize}" @click="selectArea('/'+item.name,item.path,item.id_area)">
            <router-link :to="{name: 'producttotal', params: { pathParent: encodeURIComponent(item.path) }}" class="RouterLink" :style="{color:styleList.color}" >{{ item.name }}</router-link>
        </li>
    </ul>
</template>

<script>

export default{
    name: 'menuDropdown',
    props:{
        dropdownList: Array,
        styleList: Array,
        width: String,
    },
    data(){
        return{

        }
    },
    methods:{
        selectArea(value,path,id_area){
            this.$store.commit('updateSelect',[ value, path])
            this.$store.commit('areaIsRunningUpdate',id_area)
        }
    }

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