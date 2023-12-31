<template>
    <div class="main-headingApp">
        <ul class="main-navigation bg-green-darken-4">
            <li class="home-item" @click="resetSelect">
                <router-link to="/" class="RouterLink">
                    <v-icon icon="el-icon-s-home"></v-icon>
                    Trang Chủ
                </router-link>
            </li>
            <li class="catagory-item menuDropdown" @click="chosseSelect(0)">
                <RouterLink to="/sanpham" class="RouterLink">Sản Phẩm
                </RouterLink>
            </li>
            <li class="citys-item menuDropdown">Đặc Sản Vùng Miền
                    <v-icon icon="el-icon-arrow-down"></v-icon>
                <menuDropdown class="Dropdown bg-green-darken-4" :dropdownList = areaList :styleList = styles></menuDropdown>
            </li>
            <li class="post-item">
                <router-link to="#" class="RouterLink">Tin Tức</router-link>
            </li>
            <li class="account-item icon">
                <router-link to="#" class="RouterLink">
                    <v-icon icon="el-icon-user-solid"></v-icon>
                </router-link>
            </li>
            <li class="favourite-item icon" @click="chosseSelect(3)">
                <router-link to="/yourfavourite" class="RouterLink">
                    <v-icon icon="el-icon-collection-tag"></v-icon>
                    Yêu Thích
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
        },
        menuList(){
            return this.$store.state.allMenu
        }
    },
    methods:{
        chosseSelect(index){
            this.$store.commit('updateSelect',['/ '+this.menuList[index].name,this.menuList[index].path])
            this.$store.commit('updateAreaSelect',['',''])
            this.$store.commit('updateProductSelect',['',''])
        },
        resetSelect(){
            this.$store.commit('updateSelect',['',''])
            this.$store.commit('updateAreaSelect',['',''])
            this.$store.commit('updateProductSelect',['',''])
        }

    }
   
}
</script>


<style scoped>

.RouterLink{
    text-decoration: none;
    color: #fff;
}
.RouterLink:hover{
    color: yellow;
}
.menuDropdown{
    position: relative;
}

.main-headingApp{
    background-color: #fff;
    background-image: url(https://3.bp.blogspot.com/-k8W7UwkacXw/U-J-qTkel1I/AAAAAAAAGdE/T-69E0WNcJk/s1600/repeating-vintage-paper-background.jpg);
    background-repeat: repeat;
    height: 100px;
    width: 100vw;
    position: relative;
}

.main-navigation{
    z-index: 1;
    position: absolute;
    top: 70px;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    list-style-type: none;
    justify-content:space-between;
    align-items: center;
    width: 60%;
    height: 60px;
    padding: 0 60px;
    margin-bottom: 0;
    border-radius: 40px;
}
.main-navigation > li:hover{
    color: yellow;
}
.Dropdown{
    display: none;
    top: 25px;
}
.main-navigation>li:hover .Dropdown{
    display: block;
}



</style>