import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmJNuMyGQO5htS2C1K5XmvQDG5zJpNp58",
  authDomain: "chatreact-7ac8f.firebaseapp.com",
  projectId: "chatreact-7ac8f",
  storageBucket: "chatreact-7ac8f.appspot.com",
  messagingSenderId: "918402806312",
  appId: "1:918402806312:web:d1e38e0baa2bef13343b1d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

