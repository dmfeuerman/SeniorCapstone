import { initializeApp } from 'firebase/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// other services is needed

const firebaseConfig = {
    apiKey: "AIzaSyDMzcVNlzQJ_ADBkcmDmzeZns7rjnu2iMc",
    authDomain: "seniorcapstone-15d64.firebaseapp.com",
    projectId: "seniorcapstone-15d64",
    storageBucket: "seniorcapstone-15d64.appspot.com",
    messagingSenderId: "468074837016",
    appId: "1:468074837016:web:dc88c19d90ea446df97f6d"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
