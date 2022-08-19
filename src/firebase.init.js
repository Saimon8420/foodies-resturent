// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBtpm2eJuWc6VmbGUxV22ZGFz_yTxxIik",
    authDomain: "welcome-foodies.firebaseapp.com",
    projectId: "welcome-foodies",
    storageBucket: "welcome-foodies.appspot.com",
    messagingSenderId: "854662134338",
    appId: "1:854662134338:web:ab3c07b97d15be1e598bdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;