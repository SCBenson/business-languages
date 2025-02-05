<template>
  <v-container theme="secondaryTheme">
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
                  @input="v$.formData.name.$touch()"
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
                  @input="v$.formData.email.$touch()"
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
                  @input="v$.formData.password.$touch()"
                  @blur="v$.formData.password.$touch()"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn type="register">Register</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
// import {useValidateUserRegistration} from '@/composables/validateUserRegistration.js'
// import {useRouter} from 'vue-router'
// import {defineStore} from 'pinia'
// const {formData, showPassword, v$} = useValidateUserRegistration()
// const router = useRouter()
// const store = defineStore()
// const register = async () => {
//   const isFormCorrect = await v$.value.$validate()
//   if (!isFormCorrect) return

//   try {
//     await store.dispatch('register', {
//       name: formData.name,
//       email: formData.email,
//       password: formData.password
//     })
//       router.push({name: 'Home'})
//   } catch (err) {
//     console.log(err)
//   }
// }
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email, sameAs } from "@vuelidate/validators";

export default {
  setup() {
    // v$ is reactive
    const v$ = useVuelidate();
    return { v$ };
    // Common Properties to Check Against for Validation
    // "$dirty": false "Boolean that triggers once the user types into the field"
    // "$error": false "Boolean that is true if $invalid && $dirty == true"
    // "$errors": [] "Array of errors"
    // "$silentErrors": []
    // "$invalid:" false "Indicates the state of validation when any of its child validators "
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      showPassword: false,
    };
  },
  validations() {
    return {
      formData: {
        name: { required, minLength: minLength(4) },
        email: { required, email },
        password: { required, minLength: minLength(6) },
        confirmPassword: {
          required,
          sameAsPassword: sameAs(this.formData.password),
        },
      },
    };
  },
  methods: {
    async register() {
      //$validate() cross-references the current state of the validator, according to validations()
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      this.$store
        .dispatch("register", {
          name: this.formData.name,
          email: this.formData.email,
          password: this.formData.password,
        })
        .then(() => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
