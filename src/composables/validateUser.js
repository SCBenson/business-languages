import { ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength, sameAs } from "@vuelidate/validators";

export function useAuthValidation() {
  const showPassword = ref(false);
  const isRegistering = ref(false);

  const formData = reactive({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Dynamic rules based on whether we're registering or logging in
  const rules = computed(() => ({
    formData: {
      ...(isRegistering.value && {
        name: { required, minLength: minLength(4) },
      }),
      email: { required, email },
      password: { required, minLength: minLength(6) },
      ...(isRegistering.value && {
        confirmPassword: {
          required,
          sameAsPassword: sameAs(formData.password),
        },
      }),
    },
  }));

  const v$ = useVuelidate(rules, { formData });

  // Helper function to reset form
  const resetForm = () => {
    formData.email = "";
    formData.password = "";
    if (isRegistering.value) {
      formData.name = "";
      formData.confirmPassword = "";
    }
  };

  return {
    formData,
    showPassword,
    v$,
    resetForm,
    isRegistering,
  };
}
