<template>
  <div class="padding">
    <paddingView></paddingView>
  </div>
  <v-row
    v-resize="onResize"
    justify="center"
    class="h-screen d-flex">
    <v-col class="col-left">
      left
    </v-col>
    <v-col class="">
      right
    </v-col>
  </v-row>
</template>



<script>
import paddingView from '@/components/paddingView.vue';
  export default {
    components:{
      paddingView
    }
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
.col-left{
  position: relative;
}
.col-left::after{
  content: "";
  position: absolute;
  height: 80%;
  background-color: #ccc;
  right: 0;
  top: 10%;
  width: 1px;
}
</style>
