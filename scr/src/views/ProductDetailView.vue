<template>
  <div class="padding">
    <paddingView></paddingView>
  </div>
  <div class="title ">
    <h2>{{ getProductIsSelect.name }}</h2>
  </div>
  <v-container >
    <v-row class="white">
      <!-- Phần bên trái với ảnh sản phẩm -->
      <v-col cols="12" md="4">
        <v-img  
        :src="getProductIsSelect.url" cover 
        height="400" width="500" 
        class="text-right pa-2">
        </v-img>
      </v-col>
      
      <!-- Phần bên phải với thông tin sản phẩm -->
      <v-col cols="12" md="8">
        <v-card height="400">
          <v-card-title class="bg-green-darken-4">
            <h2>{{ getProductIsSelect.name }}</h2>
          </v-card-title>

          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Chi tiết
            </div>
            <v-timeline density="compact" align="start">
              <v-timeline-item
                dot-color="red"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>Xuất xứ</strong>
                  </div>
                  <div>{{ getProductIsSelect.id_area }}</div>
                </div>
              </v-timeline-item>

              <v-timeline-item
              dot-color="yellow"
              size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>Giá tham khảo</strong>
                  </div>
                  <div>{{ getProductIsSelect.price }}&#8363;</div>
                </div>
              </v-timeline-item>

              <v-timeline-item
                dot-color="green"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>Tình trạng yêu thích</strong> 
                  </div>

                  <v-card-actions>
                    <v-btn 
                    icon="ti-heart"
                    :class="getProductIsSelect.favourite ? 'bg-red' : 'bg-white'"
                    @click="chooseFavourite">
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Phần dưới với mô tả sản phẩm -->
    <v-row>
      <v-col cols="12">
        <h3>Mô tả sản phẩm</h3>
        <p>
         {{ getProductIsSelect.describe }}
        </p>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
import paddingView from '@/components/paddingView.vue'
export default{
  name: 'productDetail',
  components:{
    paddingView
  },
  computed:{
    getProductIsSelect(){
      return this.$store.state.productIsRunning
    },
  },
  data(){
    return{
      isSelected: false,
      currentTime : this.getCurrentTime()
    }
  },
  methods:{
    chooseFavourite(){
      this.getProductIsSelect.favourite = !this.getProductIsSelect.favourite
      this.getProductIsSelect.time = this.currentTime
      console.log("time:"+this.getProductIsSelect.time);
    },
    // Lấy thời gian hiện tại khi thêm sản phẩm vào yêu thích
    getCurrentTime() {
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1; // Tháng bắt đầu từ 0, nên cộng thêm 1
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Định dạng thời gian để hiển thị
      const formattedTime = `${day}/${month}/${year} ${this.padZero(hours)}giờ ${this.padZero(minutes)}phút`;
      return formattedTime;
    },
    padZero(value) {
      // Thêm số 0 phía trước nếu giá trị là một chữ số
      return value < 10 ? `0${value}` : value;
    },
  }
}
</script>   

<style scoped>
.padding{
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #fff;
}

.title{
  width: 100vw;
  height: auto;
  border-top: 1px solid #c0c0c0;
}
.title h2{
  background-color: #1B5E20;
  color: #fff;
  height: 50px;
  width: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

</style>