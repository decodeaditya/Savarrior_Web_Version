// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import {getMessaging} from "firebase/messaging"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJXQjkIiMSxVs2ASy5eV8k8tYfJtrrOVU",
  authDomain: "savarrior-web.firebaseapp.com",
  projectId: "savarrior-web",
  storageBucket: "savarrior-web.appspot.com",
  messagingSenderId: "310461744278",
  appId: "1:310461744278:web:8656e60ffca9633cc26eb7"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
export const messaging = getMessaging(app)