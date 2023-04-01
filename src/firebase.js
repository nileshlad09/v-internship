// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import 'firebase/compat/storage';
import 'firebase/storage'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkb_5iheV2GXzlaFMUulTx4riBHZs8MaQ",
  authDomain: "v-internship.firebaseapp.com",
  projectId: "v-internship",
  storageBucket: "v-internship.appspot.com",
  messagingSenderId: "636228403028",
  appId: "1:636228403028:web:6ef2ca47af0c7b79ec12c1"
};

// Initialize Firebase
//const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(firebase.initializeApp(firebaseConfig));
//export const storage = getStorage(app);
//export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseApp = firebase.initializeApp(firebaseConfig);
//export default fireDb.database().ref();
//export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
//export const storage = firebase.storage().ref();
// export default app;