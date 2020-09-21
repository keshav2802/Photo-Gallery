import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// The web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyB6IewYyAdZgeVFT3V1Bh6Z3kiMC9oGmcA",
  authDomain: "photo-gallery-1c7c1.firebaseapp.com",
  databaseURL: "https://photo-gallery-1c7c1.firebaseio.com",
  projectId: "photo-gallery-1c7c1",
  storageBucket: "photo-gallery-1c7c1.appspot.com",
  messagingSenderId: "244053752289",
  appId: "1:244053752289:web:2fda0f5ef3c2845928baa0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize the storage and firestore
const appStorage = firebase.storage();
const appFirestore = firebase.firstore();

export { appStorage, appFirestore };

