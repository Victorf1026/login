
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBdW3LLmOZztpiYUFUu2k7rCVhsEh8_KYo",
    authDomain: "loginsvenson.firebaseapp.com",
    databaseURL: "https://loginsvenson.firebaseio.com",
    projectId: "loginsvenson",
    storageBucket: "loginsvenson.appspot.com",
    messagingSenderId: "898898256261",
    appId: "1:898898256261:web:25e5e36290184980dae4ec",
    measurementId: "G-FLB7HYMYZG"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();

