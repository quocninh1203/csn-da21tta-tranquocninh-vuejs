<template>
    <footer
    class="bg-green-darken-4 text-center d-flex flex-column"
  >
    <div>
        <a href="https://www.facebook.com/quocninh.1203"><v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
        color="#fff"
        ></v-btn></a>
    </div>

    <div class="pt-0 footers">
      
    </div>

    <v-divider></v-divider>

    <div>&copy;
      {{ new Date().getFullYear() }} — <strong>Đặc Sản Ba Miền</strong>
    </div>
  </footer>
</template>

<script>
export default{
    data(){
        return{
            icons:[
                'ti-facebook',
                'ti-twitter-alt',
                'ti-linkedin',
                'ti-instagram'
            ]
        }
    }
}
</script>

<style scoped>
.footers{
    height: 50px;
}
</style>