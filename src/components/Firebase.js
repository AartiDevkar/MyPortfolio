// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCukuFbFemQBAnwDPhpq4G3ByIXeNLV1yc",
  authDomain: "portfolio-fbce7.firebaseapp.com",
  projectId: "portfolio-fbce7",
  storageBucket: "portfolio-fbce7.appspot.com",
  messagingSenderId: "433612093283",
  appId: "1:433612093283:web:52fa01d275db82350e8556",
  measurementId: "G-MDQQMR1XQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default Firebase;