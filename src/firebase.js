import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtVsLUa0bGgT93ZumRNeEqB7_OfB88fDk",
  authDomain: "sanrio-coffee.firebaseapp.com",
  databaseURL: "https://sanrio-coffee-default-rtdb.firebaseio.com",
  projectId: "sanrio-coffee",
  storageBucket: "sanrio-coffee.appspot.com",
  messagingSenderId: "206978701025",
  appId: "1:206978701025:web:096656b9a00d9595c149a0",
  measurementId: "G-CKG87N7J2C"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);