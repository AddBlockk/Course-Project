import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnteMfPiT3Md-OyPx0Gw4kXX0WUokTEv0",
  authDomain: "course-project-agpc.firebaseapp.com",
  projectId: "course-project-agpc",
  storageBucket: "course-project-agpc.firebasestorage.app",
  messagingSenderId: "93920459813",
  appId: "1:93920459813:web:37708c95685821e58093cc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
