import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAY0sA4eHSYGzRnDi-E2ZX-Ls0JUpZoou8",
  authDomain: "sandbox-ibukiiida.firebaseapp.com",
  databaseURL: "https://sandbox-ibukiiida.firebaseio.com",
  projectId: "sandbox-ibukiiida",
  storageBucket: "sandbox-ibukiiida.appspot.com",
  messagingSenderId: "655030218521",
  appId: "1:655030218521:web:78dd5ed8b8b7cf97dedf88",
  measurementId: "G-7WBZPQEPX8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
