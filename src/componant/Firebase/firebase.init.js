// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt2KQLy8mQ9IhArZuXa4B8yaqyE61GJU0",
  authDomain: "module-49-20374.firebaseapp.com",
  projectId: "module-49-20374",
  storageBucket: "module-49-20374.firebasestorage.app",
  messagingSenderId: "317173242236",
  appId: "1:317173242236:web:2a9b740e56edcfb5c86cf9",
  measurementId: "G-1PH6B0YVYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//export default(app);

const auth = getAuth(app);

export default(auth);
