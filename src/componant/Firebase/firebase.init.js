// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8YKgZOPw-wFk8evENIv_Ur4uDz9GiEuU",
  authDomain: "module-493.firebaseapp.com",
  projectId: "module-493",
  storageBucket: "module-493.firebasestorage.app",
  messagingSenderId: "70463319577",
  appId: "1:70463319577:web:4388b27c46b35e4ddac488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);