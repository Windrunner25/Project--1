<template>
  <v-container>
    <v-sheet
      class="d-flex align-center justify-center flex-wrap text-center mx-auto mt-5 mb-5"
      elevation="4"
      height="100"
      max-width="800"
      width="100%"
      rounded
    >
      <div>
        <h2 class="text-h4 font-weight-black text-orange">Order Ducks</h2>
      </div>
    </v-sheet>
    <v-form @submit.prevent="submitForm">
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Your Name"
            outlined
            v-model="formData.name"
            :class="{ 'custom-outline': true }"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Your Email"
            outlined
            v-model="formData.email"
            :class="{ 'custom-outline': true }"
          />
        </v-col>
        <v-col cols="12">
          <v-select
            label="Duck"
            :items="items"
            outlined
            v-model="formData.duck"
            :class="{ 'custom-outline': true }"
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Comments?"
            outlined
            v-model="formData.comments"
            :class="{ 'custom-outline': true }"
            rows="4"
          />
        </v-col>
        <v-col cols="12">
          <v-btn color="orange" type="submit">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "StackedForm",
  data() {
    return {
      formData: {
        // Create a data object to hold form inputs
        name: "",
        email: "",
        duck: "",
        comments: "",
      },
      items: [
        "Chariot",
        "Christmas",
        "Classic",
        "Gamer",
        "Glitter",
        "Golden",
        "Monkey",
        "Pink",
        "Pirate",
        "Police",
        "Red",
        "Spider",
      ],
    };
  },
  methods: {
    async submitForm() {
      console.log("Submitting form with data:", this.formData); // Log the form data
      try {
        const response = await fetch("http://localhost:3000/shop/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        });
        console.log("Try 1");
        const result = await response.text();
        console.log("Try 2");
        console.log(result); // Log response from the server
        console.log("Try 3");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  },
};
</script>

<style scoped>
.custom-outline .v-input__control {
  border: 2px solid #ff5722; /* Set your desired color */
  border-radius: 4px; /* Optional: adjust border radius */
}

.custom-outline .v-input__control:hover {
  border-color: #f44336; /* Change color on hover */
}

.custom-outline .v-input--is-focused .v-input__control {
  border-color: #4caf50; /* Change color when focused */
}

.custom-outline .v-input__label {
  color: #ff5722; /* Set label color */
}

.custom-outline .v-input__slot {
  border-bottom: none; /* Remove default bottom border */
}
</style>
