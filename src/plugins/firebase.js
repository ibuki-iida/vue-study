// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY0sA4eHSYGzRnDi-E2ZX-Ls0JUpZoou8",
  authDomain: "sandbox-ibukiiida.firebaseapp.com",
  databaseURL: "https://sandbox-ibukiiida.firebaseio.com",
  projectId: "sandbox-ibukiiida",
  storageBucket: "sandbox-ibukiiida.appspot.com",
  messagingSenderId: "655030218521",
  appId: "1:655030218521:web:78dd5ed8b8b7cf97dedf88",
  measurementId: "G-7WBZPQEPX8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase