import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDMzcVNlzQJ_ADBkcmDmzeZns7rjnu2iMc",
    authDomain: "seniorcapstone-15d64.firebaseapp.com",
    projectId: "seniorcapstone-15d64",
    storageBucket: "seniorcapstone-15d64.appspot.com",
    messagingSenderId: "468074837016",
    appId: "1:468074837016:web:dc88c19d90ea446df97f6d"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
