import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAO80vJ4tYDUzU-_IK9-sMu4t5xxKy-1Gw",
    authDomain: "lingo-bingo-e3d4e.firebaseapp.com",
    projectId: "lingo-bingo-e3d4e",
    storageBucket: "lingo-bingo-e3d4e.firebasestorage.app",
    messagingSenderId: "725725429453",
    appId: "1:725725429453:web:ba7433e9adaecf9a26b384"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);