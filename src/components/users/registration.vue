<template>
    <v-container theme="mainTheme">
      
      <v-card color="#f4b754">
        <v-form @submit.prevent="submitForm">
          <v-row justify="center">
            <v-col md="6">
              <h1 v-if="registering">Register an account</h1>
              <h1 v-else>Log in to your account</h1>
              <v-row class="mb-2">
                <v-col v-if="registering">
                  <v-text-field
                    v-model="formData.name"
                    :error-messages="
                      v$.formData.name.$errors?.map((e) => e.$message) || []
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
                      v$.formData.email.$errors?.map((e) => e.$message) || []
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
                      v$.formData.password.$errors?.map((e) => e.$message) || []
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
                  <v-btn v-if="registering" type="submit">Create Account</v-btn>
                  <v-btn v-else type="submit">Sign In</v-btn>
                </v-col>
              </v-row>
              <v-row>
                  <v-col>
                      <p v-if="registering">Already have an account? Click <span @click="switchMethod" class="text-blue underline cursor-pointer">here</span> to login.</p>
                      <p v-else>Don't have an account yet? Click <span @click="switchMethod" class="text-blue underline cursor-pointer">here.</span></p>
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
  import { ref } from 'vue'
  import { useAuthValidation } from '@/composables/validateUser.js';
  import { useFirebaseAuth } from '@/composables/useFirebaseAuth.js'
  import { useRouter } from 'vue-router';
  import { errorMessages } from '@/composables/authErrorMessaging.js';
  
  const registering= ref(false);
  const { formData, showPassword, v$, resetForm } = useAuthValidation();
  const { registerUser, loginUser } = useFirebaseAuth();
  const router = useRouter();
  const snackbar = ref(false);
  const snackbarColor = ref('error');
  const snackbarMessage = ref('');
  const userLoggedIn = ref(false);
  //========================User-friendly mapping for the Firebase Error Codes========================//
  const getErrorMessage = (method, errorCode) => {
    if(method == 'register'){
        return errorMessages.registering[errorCode] || 'Registration failed. Please try again.';
    } else {
        return errorMessages.loggingIn[errorCode] || 'Log in failed. Please try again.';
    }
  };

  const switchMethod = () => {
    registering.value = !registering.value;
    resetForm();
    v$.value.$reset();
    // formData.email = '';
    // formData.password = '';
  }

  //========================Input Form Validation using Vuelidate=====================================//

  const submitForm = () => {
    if(registering.value){
        register();
    } else {
        login();
    }
  }
  
//==REGISTERING=USER===============================================//
  const register = async () => {
    console.log("Register function called")
    const isFormCorrect = await v$.value.$validate();
    console.log('Form validation result:', isFormCorrect);
    if(!isFormCorrect) {
      console.log('Form validation failed');
      return;
    }
    console.log('Attempting to register user...')

  
    const {user, error} = await registerUser(formData.email, formData.password);
  
  //========================UI Alert to notify user of unsuccessful/successful registration===========//
    if(error) {
      snackbarColor.value = 'error';
      snackbarMessage.value = getErrorMessage('register', error.code);
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
//==LOGGING=IN=USER===============================================//
  const login = async () => {
    console.log("Login function called")
    const isFormCorrect = await v$.value.$validate();
    console.log('Form validation result:', isFormCorrect);
    if(!isFormCorrect) {
        console.log('Form validation failed');
        return;
    }
    console.log('Attempting to login user...')

    const {user, error} = await loginUser(formData.email, formData.password);

//========================UI Alert to notify user of unsuccessful/successful registration===========//
    if(error) {
        snackbarColor.value = 'error';
        snackbarMessage.value = getErrorMessage('register', error.code);
        snackbar.value = true;
        console.log("Login failed:", error.message);
        return;
    }
    snackbarColor.value = 'success';
    snackbar.value = true;
    userLoggedIn.value = false;
    snackbarMessage.value = "Login successful! Redirecting...";
    console.log("Successfully logged in:", user);
    //set a timer for the snackbar to exist before redirecting...
    setTimeout(() => {
        router.replace('/dashboard').catch(err => {
        console.error('Navigation failed:', err);
        });
    }, 3000);
  };

  </script>
  