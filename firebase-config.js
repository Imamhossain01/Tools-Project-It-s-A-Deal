import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2fbxZ8Ja6YdjXg46uJi-BibydbWQ2jy0",
  authDomain: "it-s-a-deal-6b8ce.firebaseapp.com",
  projectId: "it-s-a-deal-6b8ce",
  storageBucket: "it-s-a-deal-6b8ce.firebasestorage.app",
  messagingSenderId: "1099258516686",
  appId: "1:1099258516686:web:3d70989d63baf6a3a72c9f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);