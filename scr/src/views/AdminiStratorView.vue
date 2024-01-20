<template>
<div class="main py-10">
    <v-container class="bg-white d-flex flex-column" v-if="this.$store.state.isAdmin">
        <h2 class="mx-auto">Thêm sản phẩm mới</h2>
        <v-row no-gutters>
          <v-col cols="8" class="my-10 mx-auto" :style="{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}">
            <v-sheet class="pa-5">
              <v-form
              v-model="form"
              @submit.prevent="onSubmit">
                <v-text-field :rules="rules"  label="Id sản phẩm" ref="a" v-model="addProduct.id_product"></v-text-field>
                <v-text-field :rules="rules"  label="Tên sản phẩm" ref="b" v-model="addProduct.name"></v-text-field>
                <v-text-field :rules="rules"  label="Link ảnh" ref="c" v-model="addProduct.url"></v-text-field>
                <v-text-field :rules="rules"  label="Giá tham khảo" ref="d" v-model="addProduct.price"></v-text-field>
                <v-select :rules="rules" clearable label="Vùng miền" :items="['mienbac', 'mientrung', 'miennam']" ref="e" v-model="addProduct.id_area"></v-select>
                <v-textarea clearable label="Thông tin mô tả" variant="outlined" ref="f" v-model="addProduct.describe"></v-textarea>
                <v-btn 
                  :disabled="!form"
                  type="submit"
                  color="success"
                  variant="elevated"
                  :loading="c"
                  block>Thêm
                </v-btn>
              </v-form>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>  
      <loginAccounts></loginAccounts>
</div>
</template>

<script>

import loginAccounts from '@/components/loginAccounts.vue';
export default{
    components:{
        loginAccounts
    },
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 500 || 'Max 100 characters',
      ],
      info: [
        'Id sản phẩm',
        'Tên sản phẩm',
        'Link ảnh',
        'Giá tham khảo',
      ],
      addProduct:{
        id_product: '',
        name: '',
        url: '',
        price: '',
        describe: '',
        id_area: '',
        favourite: false,
        time: ''
      },
      tam:null,
      loading: false
    }),
    computed:{
      computedClass(){
        if(this.$store.state.admin == 'true')

          return 'd-flex'
        else
          return 'd-none'
      }
    },
    methods:{
      onSubmit(){
        alert("Thêm thành công!");
        this.tam = this.addProduct
        this.loading = true
        this.$store.dispatch('addData', this.tam);

      },
    }
}
</script>

<style scoped>
.main{
  width: 100vw;
  background-image: url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/seamless-repeating-background-tile-terryfic3d.jpg);
  background-repeat: repeat;
  background-color: #fff;
  margin: 0;padding: 0;min-height: 87vh;
}

</style>