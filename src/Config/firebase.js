import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDhHLP2dAYLURGjh5bqU7gF0hNoVbNCCf8",
    authDomain: "furnituresite-83bbe.firebaseapp.com",
    projectId: "furnituresite-83bbe",
    storageBucket: "furnituresite-83bbe.appspot.com",
    messagingSenderId: "1049616081391",
    appId: "1:1049616081391:web:1c452e326edb8c3fbe961a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
