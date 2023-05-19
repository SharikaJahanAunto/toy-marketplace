// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD4uViWsa10GddiZciZHrAusfKDR0d27E",
  authDomain: "toy-marketplace-client-ca676.firebaseapp.com",
  projectId: "toy-marketplace-client-ca676",
  storageBucket: "toy-marketplace-client-ca676.appspot.com",
  messagingSenderId: "232479830340",
  appId: "1:232479830340:web:4df219309ef61059e96711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;