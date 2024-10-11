<!-- <template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="3">
        <v-card>
          <img
            src="@/assets/chariotduck.jpeg"
            alt="Image 1"
            aspect-ratio="1.7"
          />
        </v-card>
        <v-card>
          <img
            src="@/assets/christmasduck.jpeg"
            alt="Image 1"
            aspect-ratio="1.7"
          />
        </v-card>
        <v-card>
          <img
            src="@/assets/classic-duck.jpeg"
            alt="Image 1"
            aspect-ratio="1.7"
          />
        </v-card>
        <v-card>
          <img
            src="@/assets/gamer-duck.jpeg"
            alt="Image 1"
            aspect-ratio="1.7"
          />
        </v-card>
        <v-card>
          <img
            src="@/assets/glitterduck.jpeg"
            alt="Image 1"
            aspect-ratio="1.7"
          />
        </v-card>
        <v-card>
          <img
            src="@/assets/goldenduck.jpeg"
            alt="Image 1"
            aspect-ratio="1.7"
          />
        </v-card>
        <v-card>
          <img
            src="@/assets/monkeyduck.jpeg"
            alt="Image 1"
            aspect-ratio="1.7"
          />
        </v-card>
        <v-card>
          <img src="@/assets/pinkduck.jpeg" alt="Image 1" aspect-ratio="1.7" />
        </v-card>
        <v-card>
          <img
            src="@/assets/pirateduck.jpeg"
            alt="Image 1"
            aspect-ratio="1.7"
          />
        </v-card>
        <v-card>
          <img
            src="@/assets/policeduck.jpeg"
            alt="Image 1"
            aspect-ratio="1.7"
          />
        </v-card>
        <v-card>
          <img src="@/assets/redduck.jpeg" alt="Image 1" aspect-ratio="1.7" />
        </v-card>
        <v-card>
          <img
            src="@/assets/spider-duck.jpeg"
            alt="Image 1"
            aspect-ratio="1.7"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//
</script>

<style scoped>
.v-img {
  object-fit: cover;
}
</style> -->

**************

<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="4"
        lg="3"
        v-for="(image, index) in images"
        :key="index"
      >
        <v-card>
          <img :src="image.loc" :alt="image.alt" aspect-ratio="1.7" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { loc: ".src/assets/chariotduck.jpeg", alt: "Image 1" },
        { loc: "@/assets/christmasduck.jpeg", alt: "Image 2" },
        { loc: "@/assets/classic-duck.jpeg", alt: "Image 3" },
        { loc: "@/assets/gamer-duck.jpeg", alt: "Image 4" },
        { loc: "@/assets/glitterduck.jpeg", alt: "Image 5" },
        { loc: "@/assets/goldenduck.jpeg", alt: "Image 6" },
        { loc: "@/assets/monkeyduck.jpeg", alt: "Image 7" },
        { loc: "@/assets/pinkduck.jpeg", alt: "Image 8" },
        { loc: "@/assets/pirateduck.jpeg", alt: "Image 9" },
        { loc: "@/assets/policeduck.jpeg", alt: "Image 10" },
        { loc: "@/assets/redduck.jpeg", alt: "Image 11" },
        { loc: "@/assets/spider-duck.jpeg", alt: "Image 12" },
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
