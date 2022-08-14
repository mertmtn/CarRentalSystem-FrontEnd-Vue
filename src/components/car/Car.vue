<template>
  <v-container>
   <v-row no-gutters>
      <v-col  v-for="car in cars" cols="4">
        <v-card>
          <img
            v-if="car.carImageList.length > 0"
            class="card-img-top card-image" 
            v-bind:src= "'https://localhost:44357' + car.carImageList[0].imagePath"        
          />
          <img
            v-else
            class="card-img-top card-image"
            src="https://localhost:44357/Resources/Images/noImage.png"
          />

          <v-card-actions>
            <v-card-title>{{ car.carName }}</v-card-title>
          </v-card-actions>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Marka: </strong>{{ car.brandName }}
            </li>
            <li class="list-group-item">
              <strong>Model: </strong>{{ car.modelYear }}
            </li>
            <li class="list-group-item">
              <strong>Kiralama Ücreti: </strong>{{ car.dailyPrice + "₺" }}
            </li>
          </ul>
          <v-card-actions>
            <v-btn
              routerLink="/app-car-image/{{car.carId}}"
              class="btn btn-danger"
              >Araç Resim Listesi</v-btn
            >
            <v-btn
              routerLink="/app-carImage-add/{{car.carId}}"
              class="btn btn-info card-link"
              >Araç Resmi Ekle</v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <button
              routerLink="/app-car-detail/{{car.carId}}"
              class="btn btn-info card-link"
            >
              Araç Detayı
            </button>
            <v-btn class="btn btn-success card-link">Sepete Ekle</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const cars = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const imagePreUrl="https://localhost:44357/Resources/Images/";
    function fetchData() {
      loading.value = true;
      return fetch("https://localhost:44357/api/Cars/GetCarDetails", {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            const error = new Error(res.statusText);
            error.json = res.json();
            throw error;
          }

          return res.json();
        })
        .then((json) => {
          console.log(json);
          cars.value = json.data;
        })
        .catch((err) => {
          error.value = err;
          if (err.json) {
            return err.json.then((json) => {
              error.value.message = json.message;
            });
          }
        })
        .then(() => {
          loading.value = false;
        });
    }

    onMounted(() => {
      fetchData();
    });

    return {
      cars,
      loading,
      error,
    };
  },
};
</script>
