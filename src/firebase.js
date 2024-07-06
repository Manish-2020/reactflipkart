// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZBSy4upcwgemNOr2n_I7QT8XATJQ8WJ8",
    authDomain: "webapp-44121.firebaseapp.com",
    databaseURL: "https://webapp-44121-default-rtdb.firebaseio.com",
    projectId: "webapp-44121",
    storageBucket: "webapp-44121.appspot.com",
    messagingSenderId: "153981437242",
    appId: "1:153981437242:web:9f2aa24eedd61e69e17c03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app