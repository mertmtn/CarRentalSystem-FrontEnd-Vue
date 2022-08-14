<template>
  <v-app>
    <v-main>
      <v-container class="bg-surface-variant mb-6">
        <v-row>
          <v-col cols="4">
            <Brand />
          </v-col>
          <v-col cols="8">
            <Car />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Brand from "./components/brand/Brand.vue";
import Car from "./components/car/Car.vue";

export default {
  name: "App",

  components: {
    Brand,Car
  },

  data: () => ({
    //
  }),
};
</script>
