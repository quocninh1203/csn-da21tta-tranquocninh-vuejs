<template>
  <v-container class="d-flex justify-center w-100" v-if="this.$store.state.isLogin">
    <v-sheet class="bg-deep-purple pa-12 w-50" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >
          <v-text-field
            v-model="nameuser"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            clearable
            label="Tài khoản"
          ></v-text-field>
  
          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            clearable
            label="Mật khẩu"
            placeholder="Enter your password"
          ></v-text-field>
  
          <br>
  
          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign In
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      form: false,
      nameuser: null,
      password: null,
      loading: false,
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true
// this.nameuser == this.$store.state.user
        setTimeout(() => {
          this.loading = false
          if (this.nameuser == this.$store.state.user && this.password == this.$store.state.pass){
            this.$store.state.isAdmin = true
            this.$store.state.isLogin = false
            alert("Đăng nhập thành công!");
          }
          else {
            this.nameuser = null
            this.password = null
            alert("Sai tài khoản hoặc mật khẩu!");
          }
        }, 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
    },
  }
</script>