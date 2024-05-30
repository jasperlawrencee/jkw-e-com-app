import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const clientCredentials = {
    apiKey: "AIzaSyBWi1L98Ih6iuclz1XmNdZjlJ4Ap-6_7e0",
    authDomain: "jkw-e-com.firebaseapp.com",
    projectId: "jkw-e-com",
    storageBucket: "jkw-e-com.appspot.com",
    messagingSenderId: "423959156889",
    appId: "1:423959156889:web:e25f1e8b81d6e1c7298008",
    measurementId: "G-RDT3YH55X8"

};

const app = !getApps().length ? initializeApp(clientCredentials) : getApps()[0];
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };



