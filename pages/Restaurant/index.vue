<template>
    <div>
      <h1>{{ Restaurant.Name }}</h1>
      <ul>
        <li v-for="(category, index) in Restaurant.Categories" :key="index">
          {{ category }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { collection, getDocs } from "firebase/firestore";
  
  export default {
    data() {
      return {
        Restaurant: {
          Name: "",
          Categories: [], // Adicionei a propriedade `Categories` para armazenar as categorias.
        },
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
        } else {
          console.warn("Nenhum restaurante encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar restaurantes:", error);
      }
    },
  };
  </script>
  
  <style>
  /* Estilização opcional */
  </style>
  