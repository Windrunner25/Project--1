<template>
  <v-container>
    <!-- <v-row>
      <v-col
        v-for="(image, index) in images"
        :key="index"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card> -->
          <img src="../assets/" :alt="image.alt" aspect-ratio="1.7" />
        <!-- </v-card> -->
      <!-- </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { loc: "../assets/chariotduck.jpeg", alt: "Image 1" },
        { loc: "@src/assets/christmasduck.jpeg", alt: "Image 2" },
        { loc: "@src/assets/classic-duck.jpeg", alt: "Image 3" },
        { loc: "@src/assets/gamer-duck.jpeg", alt: "Image 4" },
        { loc: "@src/assets/glitterduck.jpeg", alt: "Image 5" },
        { loc: "@src/assets/goldenduck.jpeg", alt: "Image 6" },
        { loc: "@src/assets/monkeyduck.jpeg", alt: "Image 7" },
        { loc: "@src/assets/pinkduck.jpeg", alt: "Image 8" },
        { loc: "@src/assets/pirateduck.jpeg", alt: "Image 9" },
        { loc: "@src/assets/policeduck.jpeg", alt: "Image 10" },
        { loc: "@src/assets/redduck.jpeg", alt: "Image 11" },
        { loc: "@src/assets/spider-duck.jpeg", alt: "Image 12" },
        // Add more image objects as needed
      ],
    };
  },
};
</script>

<style scoped>
.v-img {
  object-fit: cover;
}
</style>
