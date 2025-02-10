import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AUTH } from "@/firebase/config.js";

export function useFirebaseAuth() {
  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        AUTH,
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
        AUTH,
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
