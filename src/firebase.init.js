// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz0AclzxIoMfDbRug1FuApfDvq208lR9U",
    authDomain: "simple-firebase-authenti-c66fe.firebaseapp.com",
    projectId: "simple-firebase-authenti-c66fe",
    storageBucket: "simple-firebase-authenti-c66fe.appspot.com",
    messagingSenderId: "1098721701984",
    appId: "1:1098721701984:web:bc473afeb8478574729305"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;