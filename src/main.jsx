import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Components/NavBar/NavBar.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdZoZbG-axKp_wCqR4d9YMsZ2XM1eXhxI",
  authDomain: "coderhouse-61565.firebaseapp.com",
  projectId: "coderhouse-61565",
  storageBucket: "coderhouse-61565.appspot.com",
  messagingSenderId: "100541130228",
  appId: "1:100541130228:web:eeda762557af43dc3ac5a1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
