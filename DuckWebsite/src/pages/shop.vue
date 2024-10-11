<template>
  <div>
    <Toolbar />
    <ShopGrid />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toolbar from "@/components/toolbar.vue"; // Adjust the path according to your folder structure
import ShopGrid from "@/components/shopgrid.vue";

export default defineComponent({
  name: "Home",
  components: {
    Toolbar,
    ShopGrid,
  },
});
</script>
