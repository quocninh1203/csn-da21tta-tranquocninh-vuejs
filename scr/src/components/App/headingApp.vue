<template>
    <div class="main-headingApp">
        <div class="h">
            <img :src="nameLogo" alt="logo" class="logo">
        </div>
        <ul class="nav">
            <li v-for="(item,index) in lists" :key="index" class="nav-list">
                <router-link :to="item.link" class="nav-link">{{ item.name }}</router-link>
            </li>
        </ul>

    </div>
</template>

<script>

export default{
    name : 'headingApp',
    data(){
        return{
            lists: [
                {name: 'TRÀ VINH' ,link: '/'       ,id: 0  },              
                {name: 'TIỀN GIANG'  ,link: '/address',id: 1  },
                {name: 'BẠC LIÊU'      ,link: '/'       ,id: 2  }, 
                {name: 'ĐỒNG THÁP'  ,link: '/'       ,id: 3  },
                {name: 'LONG AN'       ,link: '/'       ,id: 4  },              
                {name: 'CÀ MAU'    ,link: '/'       ,id: 5  }, 
                {name: 'VĨNH LONG'       ,link: '/'       ,id: 6  },
                {name: 'AN GIANG'       ,link: '/'       ,id: 7  },
                {name: 'HẬU GIANG'       ,link: '/'       ,id: 8  },
                {name: 'CẦN THƠ'       ,link: '/'       ,id: 9  }
            ],
            nameLogo: require('@/assets/imgs/logo.png'), 

            
        }
    },
    methods:{
      

    
    }   
   
}
</script>


<style scoped>
.h{
    height:100px;
    width:100vw;
    background-color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
}
.logo{
    width: 600px;
}
.nav{
    height: 50px;
    width:  100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    background-color: rgb(10, 104, 255);
}
.nav-list{
    padding: 0 20px;
    font-size: 20px;
}
.nav-link{
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
}
.nav-list:hover .nav-link{
    color: darkgray;
}

</style>