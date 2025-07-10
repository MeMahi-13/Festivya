// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain:import.meta.env.VITE_API_DOMAIN,
  projectId:import.meta.env.VITE_API_PROJECT_ID,
  storageBucket:import.meta.env.VITE_API_STORAGE_BUCKET,
  messagingSenderId:import.meta.env.VITE_API_MESSAGE_SENDER_ID,
  appId:import.meta.env.VITE_API_ID,
  measurementId:import.meta.env.VITE_API_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)