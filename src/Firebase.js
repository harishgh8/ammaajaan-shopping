import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAPUQHqHeI-gbGAs4ritwLH7Pk0z_ClvLE",
//   authDomain: "ammaajaan-shop.firebaseapp.com",
//   projectId: "ammaajaan-shop",
//   storageBucket: "ammaajaan-shop.appspot.com",
//   messagingSenderId: "99445336390",
//   appId: "1:99445336390:web:e8f9bccc7e8b4383601d47",
//   measurementId: "G-2J04P6BX07",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
