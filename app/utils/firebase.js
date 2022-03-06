import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAL8ljG9a8ML1Ut6DqXyRsJ8rifylCaQT4",
    authDomain: "tenedores-54486.firebaseapp.com",
    projectId: "tenedores-54486",
    storageBucket: "tenedores-54486.appspot.com",
    messagingSenderId: "242029128402",
    appId: "1:242029128402:web:86a2bdef0bde8c9d6a9b0b"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);