import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Web app"s Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPuGumPc5Fyt0Uz3q2cOaf_TjPBCaBsnc",
  authDomain: "orautomotores-7e344.firebaseapp.com",
  projectId: "orautomotores-7e344",
  storageBucket: "orautomotores-7e344.appspot.com",
  messagingSenderId: "89926518055",
  appId: "1:89926518055:web:8c9ab950d7a1dc5e4b9502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const myFirestore = getFirestore(app);

export default myFirestore;