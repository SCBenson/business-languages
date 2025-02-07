import { ref, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";

export function useValidateUserLogin() {
  const showPassword = ref(false);

  const formData = reactive({
    email: "",
    password: "",
  });

  const rules = {
    formData: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  };
  const v$ = useVuelidate(rules, { formData });

  return {
    formData,
    showPassword,
    v$,
  };
}
