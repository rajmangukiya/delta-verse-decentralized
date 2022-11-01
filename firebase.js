// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8sBcvBUgRPqSQe40dGWU2gM-0NHD6lC4",
    authDomain: "nft-market-9ace5.firebaseapp.com",
    projectId: "nft-market-9ace5",
    storageBucket: "nft-market-9ace5.appspot.com",
    messagingSenderId: "1044511158966",
    appId: "1:1044511158966:web:fbf29dd7f3ea9d08b92c17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);