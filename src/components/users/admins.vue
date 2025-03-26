<template>
  <v-container theme="mainTheme">
    <v-card color="#f4b754" class="pa-4">
      <v-form @submit.prevent="submitForm">
        <v-row justify="center" class="text-center">
          <v-col cols="12" md="12">
            <h1>Admin Login</h1>
            <v-row justify="center">
              <v-col cols="12" class="d-flex justify-center">
               <div style="width: 350px">
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
              </div>
             
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" class="d-flex justify-center">
                <div style="width: 350px">
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
              </div>
              </v-col>
            </v-row>

            <v-row class="text-center">
              <v-col>
                <v-btn type="submit" color="blue">Sign In</v-btn>
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
        <v-btn color="white" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script setup>
import { ref, nextTick } from "vue";
import { DB, AUTH } from "@/firebase/config.js";
import { signOut } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useUserStore } from "@/composables/stores/userStore.js";
import { useAuthValidation } from "@/composables/validateUser.js";
import { useFirebaseAuth } from "@/composables/useFirebaseAuth.js";
import { useRouter } from "vue-router";
import { errorMessages } from "@/composables/authErrorMessaging.js";

const userStore = useUserStore();
const {
  formData,
  showPassword,
  v$,
  resetForm,
  isRegistering: registering,
} = useAuthValidation();
const { loginUser } = useFirebaseAuth();
const router = useRouter();
const snackbar = ref(false);
const snackbarColor = ref("error");
const snackbarMessage = ref("");
const userLoggedIn = ref(false);

//========================User-friendly mapping for the Firebase Error Codes========================//
const getErrorMessage = (errorCode) => {
  return (
    errorMessages.loggingIn[errorCode] || "Log in failed. Please try again."
  );
};

//========================Input Form Validation using Vuelidate=====================================//

const submitForm = () => {
  login();
};

const checkAdminStatus = async (email, attempts = 3) => {
  for (let i = 0; i < attempts; i++) {
    try {
      const adminDocRef = doc(DB, "admins", "config");
      console.log("Fetching admin config document...");
      const adminDocSnap = await getDoc(adminDocRef);
      console.log("Admin doc exists:", adminDocSnap.exists());
      if (adminDocSnap.exists()) {
        console.log("Admin email in database:", adminDocSnap.data().adminEmail);
        console.log("User email:", email);
        return {
          isAdmin: adminDocSnap.data().adminEmail === email,
          adminData: adminDocSnap.data(),
        };
      } else {
        console.log("Admin config document not found");
      }
      console.log("Attempting to list all admin documents...");
      const adminsCollectionRef = collection(DB, "admins");
      const allAdminsSnap = await getDocs(adminsCollectionRef);

      console.log("Total admin documents found:", allAdminsSnap.size);
      let foundAdmin = false;
      allAdminsSnap.forEach((doc) => {
        console.log(`Document ID: ${doc.id}, Data:`, doc.data());
        if (
          doc.data().email === email ||
          (doc.data().adminEmail && doc.data().adminEmail === email)
        ) {
          foundAdmin = true;
          return {
            isAdmin: true,
            adminData: doc.data(),
          };
        }
      });
      if (foundAdmin) {
        return { isAdmin: true, adminData: { email } };
      }

      return { isAdmin: false };
    } catch (error) {
      console.error(`Admin check attempt ${i + 1} failed:`, {
        code: error.code,
        message: error.message,
      });
      if (i === attempts - 1) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  return { isAdmin: false };
};

//==LOGGING=IN=USER===============================================//
const login = async () => {
  console.log("Login function called");
  const isFormCorrect = await v$.value.$validate();
  console.log("Form validation result:", isFormCorrect);
  if (!isFormCorrect) {
    console.log("Form validation failed");
    return;
  }
  console.log("Attempting to login user...");
  try {
    const { user, error } = await loginUser(formData.email, formData.password);

    //========================UI Alert to notify user of unsuccessful/successful registration===========//
    if (error) {
      snackbarColor.value = "error";
      snackbarMessage.value = getErrorMessage(error.code);
      snackbar.value = true;
      console.log("Login failed:", error.message);
      return;
    }
    console.log("User authenticated successfully, checking admin status...");
    const { isAdmin, adminData } = await checkAdminStatus(user.email);

    if (isAdmin) {
      userStore.setUserDetails({
        email: user.email,
        uid: user.uid,
        isAdmin: true,
        ...adminData,
      });
      // Success handling
      snackbarColor.value = "success";
      snackbar.value = true;
      userLoggedIn.value = true;
      snackbarMessage.value = "Login successful! Redirecting...";
      console.log("Admin login successful:", user);

      setTimeout(() => {
        router.replace("/").catch((err) => {
          console.error("Navigation failed:", err);
        });
      }, 3000);
    } else {
      // User is authenticated but not an admin
      console.log("User authenticated but not an admin");
      await signOut(AUTH); // Sign them out
      snackbarColor.value = "error";
      snackbarMessage.value = "You do not have admin access";
      snackbar.value = true;
    }
  } catch (error) {
    console.error("Error during login process:", {
      code: error.code,
      message: error.message,
      stack: error.stack,
    });
    snackbarColor.value = "error";
    snackbarMessage.value = `Error: ${error.message}`;
    snackbar.value = true;
  }
};
</script>
