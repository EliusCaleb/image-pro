// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBC8KZewFKyxJvk3ZjBXWI-IMeha4Ou-Ls",
  authDomain: "image-pro-c0d36.firebaseapp.com",
  projectId: "image-pro-c0d36",
  storageBucket: "image-pro-c0d36.appspot.com",
  messagingSenderId: "520567551657",
  appId: "1:520567551657:web:7d70504e20d21c295e1bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth ,storage,db }