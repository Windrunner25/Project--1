<template>
    <div>
      <Toolbar />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import Toolbar from "@/components/toolbar.vue"; // Adjust the path according to your folder structure
  
  export default defineComponent({
    name: "Home",
    components: {
      Toolbar,
    },
  });
  </script>
  