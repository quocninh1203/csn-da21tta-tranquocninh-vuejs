<template>
    <div class="view">
      <productList :products = products_mn></productList>
    </div>
</template>
  
<script>
import productList from '@/components/productList.vue'
export default{
  name: 'MienNamView',
  components: {
    productList,

  },
  data(){
    return{
        products_mn:[
            //bún nước lèo
            {name: 'bún nước lèo',url: 'https://top10travinh.com/wp-content/uploads/2021/09/bun-nuoc-leo-tra-vinh-4-min.jpg',
            url_1: '',
            url_2: '',
            opening_paragraph: '',
            content: ''},
            //bánh tét
            {name: 'bánh tét trà cuôn',url: 'https://dulichtravinh.com.vn/wp-content/uploads/2021/01/11Banh-tet-My-Linh-scaled.jpg',
            url_1: '',
            url_2: '',
            opening_paragraph: '',
            content: ''},
            //dừa sáp
            {name: 'dừa sáp cầu kè',url: 'https://ninofruit.vn/wp-content/uploads/2021/07/dua-sap-cau-ke-tra-vinh2.jpg',
            url_1: '',
            url_2: '',
            opening_paragraph: '',
            content: ''},
            //tôm khô
            {name: 'tôm khô vinh kim',url: 'https://media3.scdn.vn/img3/2019/8_26/oEn4eS_simg_de2fe0_500x500_maxb.png',
            
        
        
            }
            ]
    }
  }
}

</script>


<style scoped>
.view{
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  
}

</style>