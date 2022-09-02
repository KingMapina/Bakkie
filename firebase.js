// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaSBHrsQbfNuIAg8nuxKoCKeJAEk18Do0",
    authDomain: "bakkiefinder.firebaseapp.com",
    projectId: "bakkiefinder",
    storageBucket: "bakkiefinder.appspot.com",
    messagingSenderId: "1086783911502",
    appId: "1:1086783911502:web:ef9a9847879af6c9ceb51f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };