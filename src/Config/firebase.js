import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';




const firebaseConfig = {
    apiKey: "AIzaSyDizz-lVl0ha-JNrP5ZmbKfKqDgae7TH4k",
    authDomain: "furniture-94378.firebaseapp.com",
    projectId: "furniture-94378",
    storageBucket: "furniture-94378.appspot.com",
    messagingSenderId: "571476083714",
    appId: "1:571476083714:web:2a59b612885828f874131b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


async function register(email, pass, firtName, lastName, file) {
    // const user = userCredential.user;

    try {
        await createUserWithEmailAndPassword(auth, email, pass, firtName, lastName, file)
        await addDoc(collection(db, 'users', ), {
            firtName,
            lastName,
            email,
        });
        toast.success("Acct Created")
    }
    catch (e) {
        toast.error(e.message)
    }

}

function loginUser(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass)

}

// async function uploadImages(file) {

//     const storageRef = ref(storage, 'userImage/' + file.name);
//     await uploadBytes(storageRef, file);
//     const url = await getDownloadURL(storageRef)
//     return url

// }

export {
    register,
    loginUser

}
