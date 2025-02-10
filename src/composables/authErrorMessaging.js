export const errorMessages = [
  {
    registering: {
      "auth/email-already-in-use": "An account with this email already exists",
      "auth/invalid-email": "Please provide a valid email address",
      "auth/operation-not-allowed": "Registration is currently disabled",
      "auth/weak-password": "Password should be at least 6 characters",
    },
    loggingIn: {
      "auth/invalid-email": "Please provide a valid email address",
      "auth/user-disabled": "User account has been disabled",
      "auth/operation-not-found": "No user found with this email",
      "auth/wrong-password": "Password is invalid",
      "auth/too-many-requests":
        "Access temporarily blocked due to many failed login attemps",
      "auth/operation-not-allowed":
        "Email/password accounts are not enabled in Firebase Console",
      "auth/invalid-login-credentials": "Generic error for invalid credentials",
      "auth/network-request-failed": "Network connectivity issues",
      "auth/internal-error": "Firebase internal error",
    },
  },
];
