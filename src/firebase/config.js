import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDPN3N5Esg7GgVGRhpiL3vX5jiKwlQCt6c",
  authDomain: "firegram-eeb4c.firebaseapp.com",
  databaseURL: "https://firegram-eeb4c.firebaseio.com",
  projectId: "firegram-eeb4c",
  storageBucket: "firegram-eeb4c.appspot.com",
  messagingSenderId: "251847812139",
  appId: "1:251847812139:web:811d94aa247fbb4444b66e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };