// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI3N2dGLPnJsUt9XEDriz2EMLX0l7fX9U",
  authDomain: "sign-ed3fb.firebaseapp.com",
  databaseURL: "https://sign-ed3fb-default-rtdb.firebaseio.com",
  projectId: "sign-ed3fb",
  storageBucket: "sign-ed3fb.appspot.com",
  messagingSenderId: "461996705787",
  appId: "1:461996705787:web:372ea12795e6fd72d5ad5e",
  measurementId: "G-3V1BE02LPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
