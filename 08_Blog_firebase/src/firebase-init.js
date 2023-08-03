// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5EApG1vOnw5lpFrCAH0d3BKs5WuEgr_8",
  authDomain: "blogging-app-54319.firebaseapp.com",
  projectId: "blogging-app-54319",
  storageBucket: "blogging-app-54319.appspot.com",
  messagingSenderId: "730945479794",
  appId: "1:730945479794:web:274bbbe2b615790043ceeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);