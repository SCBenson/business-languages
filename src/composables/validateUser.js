import { ref, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength, sameAs } from "@vuelidate/validators";

export function useAuthValidation(isRegistering = false) {
  const showPassword = ref(false);

  const formData = reactive({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Dynamic rules based on whether we're registering or logging in
  const getRules = (isRegistering) => ({
    formData: {
      ...(isRegistering && {
        name: { required, minLength: minLength(4) },
      }),
      email: { required, email },
      password: { required, minLength: minLength(6) },
      ...(isRegistering && {
        confirmPassword: {
          required,
          sameAsPassword: sameAs(formData.password),
        },
      }),
    },
  });

  const v$ = useVuelidate(getRules(isRegistering), { formData });

  // Helper function to reset form
  const resetForm = () => {
    formData.email = "";
    formData.password = "";
    if (isRegistering) {
      formData.name = "";
      formData.confirmPassword = "";
    }
  };

  return {
    formData,
    showPassword,
    v$,
    resetForm,
  };
}
