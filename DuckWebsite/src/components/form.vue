 <!-- This section defines the HTML structure of the component -->
<template>
    <div>
        <h2>Order Rubber Ducks</h2>

        <form @submit.prevent="submitForm">
            <!-- First Name Input -->
            <label for="firstName">First Name: </label>
            <input type="text" v-model="formData.firstName" id="firstName" required />
    
            <!-- Last Name Input -->
            <label for="lastName">Last Name: </label>
            <input type="text" v-model="formData.lastName" id="lastName" required />
    
            <!-- Email Input -->
            <label for="email">Email: </label>
            <input type="email" v-model="formData.email" id="email" required />
    
            <!-- Number of Rubber Ducks Input -->
            <label for="ducks"># of Rubber Ducks: </label>
            <input type="number" v-model="formData.ducks" id="ducks" min="1" required />
    
            <!-- Submit Button -->
            <button type="submit">Submit</button>
        </form>
  
        <!-- Confirmation Message -->
        <p v-if="submitted">
            Thank you, {{ submittedData.firstName }}! Your order for {{ submittedData.ducks }} rubber ducks has been submitted.
        </p>
    </div>
</template>


<script>
    export default {
        // This function defines the reactive data properties for the component
        data() {
            return {
                formData: {
                    firstName: '',  // Holds the first name input
                    lastName: '',   // Holds the last name input
                    email: '',      // Holds the email name input
                    ducks: 1,       // Default number of ducks to 1
                },
                submitted: false,    // Tracks whether the form has been submitted
                submittedData: {}   // Holds the data of the submitted form
            };
        },
        methods: {
            // This method is called when the form is submitted
            submitForm() {

                // Logs the form data to the console for debugging
                console.log('Form Data:', this.formData);

                // Store the submitted data in a separate property
                this.submittedData = {...this.formData};

                // Display submission message
                this.submitted = true;

                // Clear the form after submission
                this.formData.firstName = '';
                this.formData.lastName = '';
                this.formData.email = '';
                this.formData.ducks = 1; // Reset the number of ducks
            }
        }
    };
</script>
