<template>
    <div class="main-headingApp">
        <div class="namespace">
            <RouterLink to="/">
                <!-- <img alt="logo" class="logo"> -->
            </RouterLink>
        </div>
        <ul class="main-navigation">
            <li class="home-item">
                <router-link to="/" class="RouterLink">Trang Chủ</router-link>
            </li>
            <li class="catagory-item menuDropdown">
                <RouterLink to="/sanpham" class="RouterLink" @click="resetSelect">Sản Phẩm
                    <i class="ti-angle-down down"></i>
                </RouterLink>
                <menuDropdown class="Dropdown" :dropdownList = categoryList :styleList = styles :width = category_width></menuDropdown>
            </li>
            <li class="citys-item menuDropdown">
                <RouterLink to="/sanpham" class="RouterLink" @click="resetSelect">Đặc Sản Vùng Miền
                    <i class="ti-angle-down down"></i>
                </RouterLink>
                <menuDropdown class="Dropdown" :dropdownList = areaList :styleList = styles></menuDropdown>
            </li>
            <li class="post-item">
                <router-link to="/" class="RouterLink">Tin Tức</router-link>
            </li>
            <li class="account-item icon">
                <router-link to="/" class="RouterLink">
                    <i class="ti-user"></i>
                </router-link>
            </li>
            <li class="favourite-item icon">
                <router-link to="/" class="RouterLink">
                    <i class="ti-bookmark"></i>
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>
import menuDropdown from '../menuDropdown.vue';
export default{
    name: 'headingApp',
    components:{
        menuDropdown,
    },
    data(){
        return{
            nameLogo: require('@/assets/imgs/logo.png'), 
            category_width: '300px',
            styles: 
            {
                backgroundColor: '',
                fontWeight: '',
                fontSize: '',
                color: '',
            },

        }
    },
    computed:{
        areaList(){
            return this.$store.state.allArea
        },
        categoryList(){
            return this.$store.state.allCategory
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
.RouterLink{
    text-decoration: none;
    color: rgb(87, 32, 24);
}
.down{
    font-size: 12px;
    margin-left: 2px;
}
.menuDropdown{
    position: relative;
}

.main-headingApp{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    align-items: center;
}
.namespace{
    margin-left: 20px;
}
.main-navigation,ul{
    display: flex;
    list-style-type: none;
    margin-bottom: 0;
    padding: 0 80px 0 20px;
}
.main-navigation>li{
    padding: 32px 20px;
    font-size: 18px;
    font-weight: bolder;
    text-transform: uppercase;
}
.icon{
    position: relative;
}

.icon i{
    font-size: 20px;
    font-weight: bolder;
}
.icon::before{
    content: "";
    height: 25%;
    width: 1px;
    background-color: #000;
    z-index: 1;
    left: 0;
    position: absolute;
}
.Dropdown{
    display: none;
}
.main-navigation>li:hover .Dropdown{
    display: block;
}
.main-navigation>li:hover .RouterLink{
    color:brown;
}


</style>