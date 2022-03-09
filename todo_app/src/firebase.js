

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCFHOtm9gVY8wlc9Nwf5clur5uHam0Jy04",
    authDomain: "todo-app-cp-a83e8.firebaseapp.com",
    projectId: "todo-app-cp-a83e8",
    storageBucket: "todo-app-cp-a83e8.appspot.com",
    messagingSenderId: "374075687060",
    appId: "1:374075687060:web:b19bec09c8c9950b35f481",
    measurementId: "G-BJ8DGT8L03"
  });

  const db=firebaseApp.firestore();
  export default db;