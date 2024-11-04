import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxUipMIEaUtWNDdRIYajKNA_iuWe29MpI",
    authDomain: "wrestling-board.firebaseapp.com",
    projectId: "wrestling-board",
    storageBucket: "wrestling-board.appspot.com",
    messagingSenderId: "476116604305",
    appId: "1:476116604305:web:8dcc7e3c4b2e44a81d7630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;