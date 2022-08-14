<template>
<v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field 
      label="Kullanıcı Adı"
      required
      v-model="username"
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password" 
      label="Şifre"
      required
    ></v-text-field>

   
    <v-btn
      color="success"
      class="mr-4"
      @click="validate"
    >
      Giriş Yap
    </v-btn>
 
  </v-form>
</v-container>

</template>

<script>
  export default {
    data: () => ({
 
    }),

    methods: {
      login () {
        // TODO: API metodu kullanılacak
      }      
    },
  }
</script>