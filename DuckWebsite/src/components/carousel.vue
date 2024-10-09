<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4 mt-5"
    elevation="4"
    max-width="800"
    width="100%"
    rounded
  >
    <div>
      <h2 class="text-h7 font-weight-black text-orange mb-5 mt-5">
        Popular Products
      </h2>
    </div>
    <v-sheet width="600px">
      <v-carousel
        show-arrows="hover"
        class="my-carousel mt-5 mb-5"
        max-width="600"
        width="80%"
      >
        <v-carousel-item
          src="../assets/classic-duck.jpeg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="../assets/gamer-duck.jpeg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="../assets/spider-duck.jpeg"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
//
</script>
