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
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
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