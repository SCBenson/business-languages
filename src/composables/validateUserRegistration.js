import { ref, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength, sameAs } from "@vuelidate/validators";

export function useValidateUserRegistration() {
  const showPassword = ref(false);

  const formData = reactive({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const rules = {
    formData: {
      name: { required, minLength: minLength(4) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { sameAsPassword: sameAs(formData.password) },
    },
  };
  const v$ = useVuelidate(rules, { formData });

  return {
    formData,
    showPassword,
    v$,
  };
}
