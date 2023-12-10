<template>
    <h2>Các món đặc sản của Miền nam</h2>
    <div class="view">
      <productList :products = products_mn :selectId = selectedOptionId></productList>
      <SelectOptions  @selected-Option="handleSelected" :citys = citysList_mn ></SelectOptions>
    </div>
 
</template>
  
<script>
import productList from '@/components/productList.vue'
import SelectOptions from '@/components/SelectOptions.vue';
export default{
  name: 'MienNamView',
  components: {
    productList,
    SelectOptions
  },
  data(){
    return{
        products_mn:[
            //bún nước lèo
            {name: 'bún nước lèo',url: 'https://top10travinh.com/wp-content/uploads/2021/09/bun-nuoc-leo-tra-vinh-4-min.jpg',
            id: 'tv',
            opening_paragraph: '',
            content: ''},
            //dừa sáp
            {name: 'dừa sáp cầu kè',url: 'https://vnn-imgs-f.vgcloud.vn/2021/10/15/18/loai-dua-sieu-dat-khong-co-nuoc-mem-deo-nhu-kem-gia-vai-tram-ngan-trai-o-tra-vinh-5.jpg',
            id: 'tv',
            opening_paragraph: '',
            content: ''},
            //tôm khô
            {name: 'tôm khô vinh kim',url: 'https://media3.scdn.vn/img3/2019/8_26/oEn4eS_simg_de2fe0_500x500_maxb.png',
            id: 'tv',
            },
            //kẹo dừa
            {name: 'kẹo dừa bến tre',url: 'https://skp.vn/wp-content/uploads/2021/03/keo-dua-ben-tre-la-mot-dac-san-doc-dao-de-lai-an-tuong-sau-dam-87.jpg',
            id: 'bt',
            },
            //bánh pía
            {name: 'bánh pía sóc trăng', url: 'https://nephuong.com.vn/wp-content/uploads/2020/05/3d8f784faa007c73d7f4fceebba7e633.png',
            id: 'st',
            },
            //bánh tét
            {name: 'bánh tét trà cuôn',url: 'https://dulichtravinh.com.vn/wp-content/uploads/2021/01/11Banh-tet-My-Linh-scaled.jpg',
            id: 'tv',
            opening_paragraph: '',
            content: ''},
            //gỏi cá trích
            {name: 'gỏi cá trích phú quốc',url: 'https://statics.vinpearl.com/goi-ca-trich-Phu-Quoc-hinh-anh2_1627892585.jpg',
            id: 'kg',
            },
            //
            {name: '',url: '',
            id: '',
            },
            //
            {name: '',url: '',
            id: '',
            },
            //
            {name: '',url: '',
            id: '',
            },
            //
            {name: '',url: '',
            id: '',
            },




        ],
        citysList_mn:[
          {name:'Tất Cả',id: 'all'},{name:'Bình Phước',id: 'bp'},{name: 'Bình Dương',id: 'bd'},{name: 'TP.Hồ Chí Minh',id: 'hcm'},{name: 'Tây Ninh',id: 'tn'},
          {name: 'Bà Rịa Vũng Tàu',id: 'vt'},{name: 'Long An',id: 'la'},{name: 'Đồng Tháp',id: 'dt'},{name: 'Cần Thơ',id: 'ct'},{name: 'Bến Tre',id: 'bt'},
          {name: 'Vĩnh Long',id: 'vl'},{name: 'Trà Vinh',id: 'tv'},{name: 'Hậu Giang',id: 'hg'},{name: 'Kiên Giang',id: 'kg'},{name: 'Sóc Trăng',id: 'st'},
          {name: 'Bạc Liêu',id: 'bl'},{name: 'Cà Mau',id: 'cm'},{name: 'Đồng Nai',id: 'dn'},{name: 'Tiền Giang',id: 'tg'},
        ],
        selectedOptionId:null,
    }
  },
  methods: {
    handleSelected(data) {
      this.selectedOptionId = data;
    }
  }
}

</script>


<style scoped>
.view{
  margin: 0;
  padding: 0;
  display: flex;
  justify-content:space-evenly;
  
}
h2{
  text-transform: uppercase;
  color:rgb(10, 104, 255);
  padding: 30px;
  text-align: center;
  position: relative;
}
h2::before{
  content: "";
  position: absolute;
  z-index: 1;
  background-color: rgb(10, 104, 255);
  width: 600px;
  height: 2px;
  left: 15%;
  bottom: 0;
}

</style>