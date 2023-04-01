// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const firebaseApp = initializeApp(firebaseConfig);

// export default app;