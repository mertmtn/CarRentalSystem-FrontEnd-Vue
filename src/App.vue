<template>
  <v-app> 
      <router-view></router-view> 
  </v-app>
</template>

<script>
import Brand from "./components/brand/Brand.vue";
import Car from "./components/car/Car.vue";
import Navbar from "./components/navbar/Navbar.vue";
export default {
  name: "App",

  components: {
    Brand,
    Car,
    Navbar,
  },

  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          { title: 'Sign In', path: '/signin', icon: 'lock_open' }
     ]
    }
  },
};
</script>
