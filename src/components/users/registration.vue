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
                      v$?.formData?.name.$errors?.map((e) => e.$message) || []
                    "
                    label="Name"
                    required
                    @blur="v$?.formData?.name?.$touch()"
                    prepend-icon="mdi-account-circle"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="formData.email"
                    :error-messages="
                      v$?.formData?.email.$errors?.map((e) => e.$message) || []
                    "
                    label="Email"
                    required
  
                    @blur="v$?.formData?.email?.$touch()"
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
                      v$?.formData?.password.$errors?.map((e) => e.$message) || []
                    "
                    label="Password"
                    required
                    @blur="v$?.formData?.password?.$touch()"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col v-if="registering">
                  <v-text-field
                    v-model="formData.confirmPassword"
                    :type="showPassword ? 'text' : 'password'"
                    :error-messages="
                      v$?.formData?.confirmPassword.$errors?.map((e) => e.$message) || []
                    "
                    label="Confirm Password"
                    required
                    @blur="v$?.formData?.confirmPassword?.$touch()"
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
  import { ref, nextTick } from 'vue'
  import { DB, AUTH } from "@/firebase/config.js";
  import { signOut } from "firebase/auth";
  import { doc, getDoc, setDoc } from "firebase/firestore";
  import { useUserStore } from '@/composables/stores/userStore.js';
  import { useAuthValidation } from '@/composables/validateUser.js';
  import { useFirebaseAuth } from '@/composables/useFirebaseAuth.js'
  import { useRouter } from 'vue-router';
  import { errorMessages } from '@/composables/authErrorMessaging.js';

  
  const userStore = useUserStore();
  const { formData, showPassword, v$, resetForm, isRegistering: registering } = useAuthValidation();
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

  const switchMethod = async () => {
    resetForm();

    registering.value = !registering.value;

    await nextTick();
    if (v$.value){
      v$.value.$reset();
    }
    
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
    console.log('All validation errors:', v$.value.$errors);
    console.log('Name errors:', v$.value.formData.name?.$errors);
    console.log('Email errors:', v$.value.formData.email?.$errors);
    console.log('Password errors:', v$.value.formData.password?.$errors);
    console.log('Form Data:', formData);
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
    //Add information to firestore DB.
    try{
      const usersCollection = doc(DB, 'users', user.uid);

      await setDoc(usersCollection, {
        'first-name': formData.name,
        'last-name': '',
        'languages': '',
        'profile-picture': '',
        'email': formData.email,
        'uid': user.uid,
      });
      
    } catch(error) {
      console.log('Error submitting the user information: ', error);
    }


    snackbarColor.value = 'success';
    snackbar.value = true;
    snackbarMessage.value = "Registration successful! Redirecting...";
    console.log("Successfully registered:", user);
    signOut(AUTH);
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
        snackbarMessage.value = getErrorMessage('login', error.code);
        snackbar.value = true;
        console.log("Login failed:", error.message);
        return;
    }

    try{
      const userDocRef = doc(DB, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if(userDoc.exists()) {
        userStore.setUserDetails(userDoc.data());
        console.log("User data fetched:", userDoc.data());
      } else {
        console.log("No user document found!");
      }
    }catch(error){
      console.error("Error fetching user data:", fetchError);
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
  