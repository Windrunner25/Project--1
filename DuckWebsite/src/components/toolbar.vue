<template>
  <v-app-bar app>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn
      v-for="(item, index) in menuItems"
      :key="index"
      text
      @click="handleMenuClick(item)"
      :to="`/${item.address}`"
    >
      {{ item.name }}
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppBar",
  data() {
    return {
      title: "Premier Ducks",
      menuItems: [
        { name: "Home", address: "" }, // Maps to the root path '/'
        { name: "Shop", address: "shop" },
      ],
    };
  },
  methods: {
    handleMenuClick(item: string) {
      console.log(`${item} clicked`);
      // Implement your navigation logic here
    },
  },
});
</script>