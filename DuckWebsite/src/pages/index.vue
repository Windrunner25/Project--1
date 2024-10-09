<template>
  <div>
    <Toolbar />
    <Title />
    <Carousel />
  </div>
</template>

<!-- <script lang="ts" setup>
import Toolbar from "../components/toolbar.vue"; // Import your custom Toolbar component
import PageTitle from "../components/title.vue"; // Import your custom PageTitle component
</script> -->

<script lang="ts">
import { defineComponent } from "vue";
import Title from "@/components/title.vue"; // Adjust the path according to your folder structure
import Toolbar from "@/components/toolbar.vue"; // Adjust the path according to your folder structure
import Carousel from "@/components/carousel.vue"; // Adjust the path according to your folder structure


export default defineComponent({
  name: "Home",
  components: {
    Title, // Register the Title component
    Toolbar,
    Carousel,
  },
});
</script>
