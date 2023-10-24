// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {GoogleAuthProvider,getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSjW1hpSvPS7Ir8x4gqLJdMuqqW6b2YbY",
  authDomain: "wthree-auth.firebaseapp.com",
  databaseURL: "https://wthree-auth-default-rtdb.firebaseio.com",
  projectId: "wthree-auth",
  storageBucket: "wthree-auth.appspot.com",
  messagingSenderId: "1090508971641",
  appId: "1:1090508971641:web:5cb10dd1fa03e0698c3ea8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);

export const provider=new GoogleAuthProvider(app);
