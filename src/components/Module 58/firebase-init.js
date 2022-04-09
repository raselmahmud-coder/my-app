// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZA7QhMsprk6BUI7RIJ1YsyVKI_NWr18I",
  authDomain: "router-firebase-integrat-763bd.firebaseapp.com",
  projectId: "router-firebase-integrat-763bd",
  storageBucket: "router-firebase-integrat-763bd.appspot.com",
  messagingSenderId: "123329037725",
  appId: "1:123329037725:web:0f96c66ac3eb4108069b74"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
export default fireBaseApp;