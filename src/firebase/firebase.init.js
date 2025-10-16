// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// DANGER--- DO NOT SHARE CONFIG IN PUBLIC
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfwYY-HTWKYTSm1_CtxOX6b2XiKZIrnew",
  authDomain: "email-password-auth-df7d9.firebaseapp.com",
  projectId: "email-password-auth-df7d9",
  storageBucket: "email-password-auth-df7d9.firebasestorage.app",
  messagingSenderId: "8567072953",
  appId: "1:8567072953:web:e4e1e0dd1c4b9dcc655368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);