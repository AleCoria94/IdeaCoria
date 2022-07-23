// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD8OoLXoaaT19W7SxDtofy72vjIjQ0viJ4",
  authDomain: "vomeafirebase.firebaseapp.com",
  projectId: "vomeafirebase",
  storageBucket: "vomeafirebase.appspot.com",
  messagingSenderId: "517817536748",
  appId: "1:517817536748:web:79644f474ae0b5d5e895c9",
  measurementId: "G-6D16WNHGHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function iniFirebase(){
    return app;
}