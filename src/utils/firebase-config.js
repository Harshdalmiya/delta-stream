
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIH-0AI96Gg7XNgCbFYM51k5751O0zcys",
  authDomain: "react-netflix-clone16.firebaseapp.com",
  projectId: "react-netflix-clone16",
  storageBucket: "react-netflix-clone16.appspot.com",
  messagingSenderId: "361796000242",
  appId: "1:361796000242:web:c24999afc9abbc40c7336b",
  measurementId: "G-B0YQE43BBZ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);