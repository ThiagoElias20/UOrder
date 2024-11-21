<template>
    <header>
        <div class="restaurantHeader">
          <div class="restaurantHeader__info">
            <img :src="Restaurant.Logo" alt="">
            <h3>{{ Restaurant.Name }}</h3>
          </div>
          <div class="restaurantHeader__categories">
            <ul>
            <li v-for="(category, index) in Categories" :key="index">
              {{ category.Name }}
            </li>
          </ul>
          </div>
        </div>
    </header>
    <RestaurantCategory v-for="(Category, index) in Categories" :Category="Category"/>
  </template>
  
  <script>
  import { collection, getDocs } from "firebase/firestore";
  
  export default {
    data() {
      return {
        Restaurant: {},
        Categories: [],
      };
    },
    async mounted() {
      const { $firebase } = useNuxtApp();
      const firestore = $firebase.firestore;
  
      try {
        const querySnapshot = await getDocs(collection(firestore, "Restaurants"));
  
        // Pega o primeiro restaurante Pizza Pizza para teste
        if (!querySnapshot.empty) {
          const firstRestaurant = querySnapshot.docs[0];
          this.Restaurant = {
            id: firstRestaurant.id,
            ...firstRestaurant.data(),
          };
          // console.log(this.Restaurant)

          // Pega subcoleção Categorias
          const categories = await getDocs(
            collection(firestore, "Restaurants", this.Restaurant.id, "Categories")
          );

          this.Categories = categories.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          console.log(this.Categories);
        } else {
          console.warn("Nenhum restaurante encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar restaurantes:", error);
      }
    },
  };
  </script>
  
  <style scoped>
  .restaurantHeader__info {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .restaurantHeader__info img {
    height: 32px;
    width: 32px;
  }
  .restaurantHeader__categories ul {
    display: flex;
    gap: 8px;
  }
  </style>
  