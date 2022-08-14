<template>
      <Navbar />
      <v-container>  
        <v-row>
          <v-col cols="4">
            <Brand />
          </v-col>
          <v-col cols="8">
            <Car />
          </v-col>
        </v-row>
      </v-container>
    
</template>

<script>
import Brand from "../brand/Brand.vue";
import Car from "../car/Car.vue"; 

export default {
  name: "Home",

  components: {
    Brand,Car 
  },
 
};
</script>
