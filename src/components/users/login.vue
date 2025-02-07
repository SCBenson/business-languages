<template>
    <v-container theme="mainTheme">
      
      <v-card color="#f4b754">
        <v-form @submit.prevent="login">
          <v-row justify="center">
            <v-col md="6">
              <h1>Login to your account</h1>
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
                  <v-btn type="submit">Log In</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                    <p>Don't have an account yet? Click <router-link to="/register" class="text-blue-600 underline hover:text-blue-800">here.</router-link></p>
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
import { useValidateUserLogin } from '@/composables/validateUserLogin';
import { useFirebaseAuth } from '@/composables/useFirebaseAuth.js';
import {useRouter} from 'vue-router';

const {formData, v$, showPassword} = useValidateUserLogin();
const {loginUser} = useFirebaseAuth();
const router = useRouter();
const snackbar = ref(false);
const snackbarColor = ref('error');
const snackbarMessage = ref('');
//========================User-friendly mapping for the Firebase Error Codes========================//
const getErrorMessage = (errorCode) => {
  const errorMessages = {
    'auth/invalid-email': 'Please provide a valid email address',
    'auth/user-disabled': 'User account has been disabled',
    'auth/operation-not-found': 'No user found with this email',
    'auth/wrong-password': 'Password is invalid',
    'auth/too-many-requests': 'Access temporarily blocked due to many failed login attemps',
    'auth/operation-not-allowed': 'Email/password accounts are not enabled in Firebase Console',
    'auth/invalid-login-credentials': 'Generic error for invalid credentials',
    'auth/network-request-failed': 'Network connectivity issues',
    'auth/internal-error': 'Firebase internal error'
  };
  
  return errorMessages[errorCode] || 'Registration failed. Please try again.';
};
//==================================================================================================//

//========================Input Form Validation using Vuelidate=====================================//
const login = async () => {
  console.log("Login function called")
  const isFormCorrect = await v$.value.$validate();
  console.log('Form validation result:', isFormCorrect);
  if(!isFormCorrect) {
    console.log('Form validation failed');
    return;
  }
  console.log('Attempting to login user...')
  
//==================================================================================================//

//========================Firebase Authentication for logging in an existing user===================//

  const {user, error} = await loginUser(formData.email, formData.password);

//========================UI Alert to notify user of unsuccessful/successful registration===========//
  if(error) {
    snackbarColor.value = 'error';
    snackbarMessage.value = getErrorMessage(error.code);
    snackbar.value = true;
    console.log("Login failed:", error.message);
    return;
  }
  snackbarColor.value = 'success';
  snackbar.value = true;
  snackbarMessage.value = "Login successful! Redirecting...";
  console.log("Successfully logged in:", user);
  //set a timer for the snackbar to exist before redirecting...
  setTimeout(() => {
    router.replace('/').catch(err => {
      console.error('Navigation failed:', err);
    });
  }, 3000);
};
</script>