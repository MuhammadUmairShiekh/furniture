import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
   GoogleAuthProvider,
   FacebookAuthProvider,
      
} from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs , getDoc , doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
// https://dreamfurniture-5c555.firebaseapp.com/__/auth/handler
const firebaseConfig = {
  apiKey: "AIzaSyDmzpuq6TB2yQ4Mzu8n8bDyWuwABkK9LEM",
  authDomain: "dreamfurniture-5c555.firebaseapp.com",
  projectId: "dreamfurniture-5c555",
  storageBucket: "dreamfurniture-5c555.appspot.com",
  messagingSenderId: "317377479609",
  appId: "1:317377479609:web:7fc5f93b4193171a316c68",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);

export const provider = new GoogleAuthProvider()
export const provider1 = new FacebookAuthProvider()

// export const FaceBookAuth = async () => {
//   const provider1 = signInWithPopup (auth, faceBook)
//   return provider1
// } 

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
  productName,
  shortDesc,
  description,
  category,
  price,
  imgUrl,
}) {
  try {
    const url = await uploadImage(imgUrl);
    const data = {
      productName,
      shortDesc,
      description,
      category,
      price,
      imgUrl: url,
    };
    await addDoc(collection(db, "products"), data);
    toast.success("Data Has Been Put");
  } catch (e) {
    toast.error(e.message);
  }
}
async function uploadImage(imgUrl) {
  const storageRef = ref(storage, "ProductImages/" + imgUrl.name);
  await uploadBytes(storageRef, imgUrl);
  const url = await getDownloadURL(storageRef);
  return url;
}

async function getData() {
  const onSnapshot = await getDocs(collection(db, "products"));
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
}
// const restro_data1 = [];
// function postRestaurants() {
//   try {
//     for (var i = 0; i < restro_data1.length; i++) {
//       addDoc(collection(db, "products"), restro_data1[i]);
//     }
//   } catch (e) {
//     alert(e.message);
//   }
// }

async function getIdData(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();

  // console.log(docSnap.data());
}

export { register, loginUser, addProductList, getData, userData, getIdData };
