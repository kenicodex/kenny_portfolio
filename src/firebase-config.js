// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVaSAAHSNMuUpg_Yt6VB0ofzCbK1rgMj4",
  authDomain: "project-khenny.firebaseapp.com",
  projectId: "project-khenny",
  storageBucket: "project-khenny.appspot.com",
  messagingSenderId: "490352439488",
  appId: "1:490352439488:web:cbd5a001bd9d0fd5d47d25",
  measurementId: "G-GQ4Z08SCT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);