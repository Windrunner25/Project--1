<template>
  <v-app-bar app>
    <v-toolbar-title>Premier Ducks</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn to="/"> Home </v-btn>
    <v-btn to="shop"> Shop </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppBar",
});
</script>
