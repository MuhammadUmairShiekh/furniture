import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  collectionRef,
  getDoc,
  getDocs,
  onSnapshot,
  
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDizz-lVl0ha-JNrP5ZmbKfKqDgae7TH4k",
  authDomain: "furniture-94378.firebaseapp.com",
  projectId: "furniture-94378",
  storageBucket: "furniture-94378.appspot.com",
  messagingSenderId: "571476083714",
  appId: "1:571476083714:web:2a59b612885828f874131b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);

async function register(email, pass, firtName, lastName, file) {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email,
      pass,
      firtName,
      lastName,
      file
    );
    await addDoc(collection(db, "users"), {
      displayName: firtName,
      lastName,
      email,
    });
    toast.success("Acct Created");
  } catch (e) {
    toast.error(e.message);
  }
}

function loginUser(email, pass) {
  return signInWithEmailAndPassword(auth, email, pass);
}

async function addProductList({
  prodTitle,
  shortDes,
  description,
  prodCategory,
  prodPrice,
  prodImage,
}) {
  try {
    const url = await uploadImage(prodImage);
    const data = {
      prodTitle,
      shortDes,
      description,
      prodCategory,
      prodPrice,
      image: url,
    };
    await addDoc(collection(db, "ProductList"), data);
    toast.success("Data Has Been Put");
  } catch (e) {
    toast.error(e.message);
  }
}
async function uploadImage(prodImage) {
  const storageRef = ref(storage, "ProductImages/" + prodImage.name);
  await uploadBytes(storageRef, prodImage);
  const url = await getDownloadURL(storageRef);
  return url;
}

async function getData() {
  const onSnapshot = await getDocs(collection(db, "ProductList"));
  const Product = [];
  onSnapshot.forEach((doc) => {
    const data = doc.data();
    data.id = doc.id;
    Product.push(data);
  });
  return Product;

}
  async function userData() {
    const onSnapshot = await getDocs(collection(db, "users"));
    const Users = [];
    onSnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      Users.push(data);
    });
    return Users;
  // await onSnapshot(collectionRef , snapshot => {
  //   snapshot.doc.map(doc => ({
  //     ...doc.data(), id: doc.id
  //   }));
  // })
  }

export { register, loginUser, addProductList , getData ,userData };
