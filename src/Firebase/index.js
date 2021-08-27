import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAHOJV5tBQFnwwaLywNVfxSCH2iMLdrN9U",
  authDomain: "hotel-booking-website-746d5.firebaseapp.com",
  projectId: "hotel-booking-website-746d5",
  storageBucket: "hotel-booking-website-746d5.appspot.com",
  messagingSenderId: "275626667533",
  appId: "1:275626667533:web:b617064cc8477248d9af44",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const createUser = createUserWithEmailAndPassword;
