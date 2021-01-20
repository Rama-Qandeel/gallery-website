import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB5tabqHaKo0ZAgHsX4X0v7FZ88UY0rDAQ",
    authDomain: "gallery-website-2b976.firebaseapp.com",
    databaseURL: "https://gallery-website-2b976-default-rtdb.firebaseio.com",
    projectId: "gallery-website-2b976",
    storageBucket: "gallery-website-2b976.appspot.com",
    messagingSenderId: "556761022428",
    appId: "1:556761022428:web:1a5d2f68cbfa8912c4d919",
    measurementId: "G-G1LM0NQ7S6"
  };

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();


export { projectStorage, projectFirestore};