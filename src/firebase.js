import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoqL_fmpjfPUJDy61Bw_BuesKEOvI4tqQ",
    authDomain: "perfume-8a7ed.firebaseapp.com",
    projectId: "perfume-8a7ed",
    storageBucket: "perfume-8a7ed.firebasestorage.app",
    messagingSenderId: "602183012238",
    appId: "1:602183012238:web:e9e33c9a2919b3bb3d1edf",
    measurementId: "G-ZWKZYCQ36Z"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
