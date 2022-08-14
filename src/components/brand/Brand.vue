<template>
  <div>
    <v-table theme="dark">
      <thead>
        <tr>
          <th scope="col">Marka Adı</th>
          <th scope="col">İşlem</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="brand in brands">
          <td>{{ brand.name }}</td>
          <td>
            <v-btn
              routerLink="/app-car/brand/{{brand.id}}"
              color="error"
            >
              {{ brand.name }}<br />Araba Listesi
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const brands = ref(null);
    const loading = ref(true);
    const error = ref(null);

    function fetchData() {
      loading.value = true;
      return fetch("https://localhost:44357/api/Brands/GetAll", {
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
          brands.value = json.data;
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
      brands,
      loading,
      error,
    };
  },
};
</script>
