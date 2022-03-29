// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARmIv4Tbvm8QG-OFVbIkBXunHULcfMN3U",
  authDomain: "house-market-place-38a04.firebaseapp.com",
  projectId: "house-market-place-38a04",
  storageBucket: "house-market-place-38a04.appspot.com",
  messagingSenderId: "555992100910",
  appId: "1:555992100910:web:56c011e0fead3c91506fbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const db = getFirestore()