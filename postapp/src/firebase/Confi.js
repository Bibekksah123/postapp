
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCpPKu_LgSh7a2XKFKZo_IWKkN6VP8U1CU",
  authDomain: "post-1d0a1.firebaseapp.com",
  projectId: "post-1d0a1",
  storageBucket: "post-1d0a1.appspot.com",
  messagingSenderId: "378446547720",
  appId: "1:378446547720:web:7a2024d780b00ba25ababd",
  measurementId: "G-SM5X23HFNK"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider() 