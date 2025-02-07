<template>
  <v-container theme="mainTheme">
    
    <v-card color="#f4b754">
      <v-form @submit.prevent="register">
        <v-row justify="center">
          <v-col md="6">
            <h1>Register an account</h1>
            <v-row class="mb-2">
              <v-col>
                <v-text-field
                  v-model="formData.name"
                  :error-messages="
                    v$.formData.name.$errors.map((e) => e.$message)
                  "
                  label="Name"
                  required
                  @blur="v$.formData.name.$touch()"
                  prepend-icon="mdi-account-circle"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.email"
                  :error-messages="
                    v$.formData.email.$errors.map((e) => e.$message)
                  "
                  label="Email"
                  required

                  @blur="v$.formData.email.$touch()"
                  prepend-icon="mdi-mail"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="formData.password"
                  :type="showPassword ? 'text' : 'password'"
                  :error-messages="
                    v$.formData.password.$errors.map((e) => e.$message)
                  "
                  label="Password"
                  required
                  @blur="v$.formData.password.$touch()"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn type="submit">Register</v-btn>
              </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p>Already have an account? Click <router-link to="/login" class="text-blue-600 underline hover:text-blue-800">here</router-link> to login.</p>
                </v-col>
              </v-row>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      timeout="3000"
      location="top"  
    >
      {{ snackbarMessage }}
      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    
    
  </v-container>
</template>
<script setup>
import {ref} from 'vue'
import { useValidateUserRegistration } from '@/composables/validateUserRegistration';
import { useFirebaseAuth } from '@/composables/useFirebaseAuth.js'
import {useRouter} from 'vue-router';

const {formData, v$, showPassword} = useValidateUserRegistration();
const {registerUser} = useFirebaseAuth();
const router = useRouter();
const snackbar = ref(false);
const snackbarColor = ref('error');
const snackbarMessage = ref('');
//========================User-friendly mapping for the Firebase Error Codes========================//
const getErrorMessage = (errorCode) => {
  const errorMessages = {
    'auth/email-already-in-use': 'An account with this email already exists',
    'auth/invalid-email': 'Please provide a valid email address',
    'auth/operation-not-allowed': 'Registration is currently disabled',
    'auth/weak-password': 'Password should be at least 6 characters'
  };
  
  return errorMessages[errorCode] || 'Registration failed. Please try again.';
};
//==================================================================================================//

//========================Input Form Validation using Vuelidate=====================================//
const register = async () => {
  console.log("Register function called")
  const isFormCorrect = await v$.value.$validate();
  console.log('Form validation result:', isFormCorrect);
  if(!isFormCorrect) {
    console.log('Form validation failed');
    return;
  }
  console.log('Attempting to register user...')
  
//==================================================================================================//

//========================Firebase Authentication for registering a new user========================//

  const {user, error} = await registerUser(formData.email, formData.password);

//========================UI Alert to notify user of unsuccessful/successful registration===========//
  if(error) {
    snackbarColor.value = 'error';
    snackbarMessage.value = getErrorMessage(error.code);
    snackbar.value = true;
    console.log("Registration failed:", error.message);
    return;
  }
  snackbarColor.value = 'success';
  snackbar.value = true;
  snackbarMessage.value = "Registration successful! Redirecting...";
  console.log("Successfully registered:", user);
  //set a timer for the snackbar to exist before redirecting...
  setTimeout(() => {
    router.replace('/').catch(err => {
      console.error('Navigation failed:', err);
    });
  }, 3000);
};

</script>
