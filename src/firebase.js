// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB87OurLtPuo9SNWD8G5QzlDOohD7LJ20",
  authDomain: "blog-f3837.firebaseapp.com",
  projectId: "blog-f3837",
  storageBucket: "blog-f3837.appspot.com",
  messagingSenderId: "685516471978",
  appId: "1:685516471978:web:b4bf7c3bd5c0c0092fdad3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
