<template>
    <SelectOptions :citys = citysList_mt></SelectOptions>
</template>
  
  <script>
  import SelectOptions from '@/components/SelectOptions.vue'
  export default {
    name: 'MienTrungView',
    components:{
        SelectOptions,
    },
    data() {
      return {
        citysList_mt: [
            'Tất Cả',
            'Thanh Hóa',
            'Nghệ An',
            'Hà Tĩnh',
            'Đà Nẵng',
            'Bình Thuận',
        ],
   
       
      };
    }
  };
  </script>
  
  <style scoped>

  </style>