import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/config.js";

export function useFirebaseAuth() {
  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        user: userCredential.user,
        error: null,
      };
    } catch (error) {
      return {
        user: null,
        error: {
          code: error.code,
          message: error.message,
        },
      };
    }
  };

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        user: userCredential.user,
        error: null,
      };
    } catch (error) {
      return {
        user: null,
        error: {
          code: error.code,
          message: error.message,
        },
      };
    }
  };

  return { registerUser, loginUser };
}
