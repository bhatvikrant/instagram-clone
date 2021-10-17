// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAieYjqLr5EEBLx5Ar3ZzvSLq6UXblhAk0",
  authDomain: "instagram-clone-viki.firebaseapp.com",
  projectId: "instagram-clone-viki",
  storageBucket: "instagram-clone-viki.appspot.com",
  messagingSenderId: "2463975139",
  appId: "1:2463975139:web:0d18d52d3e29507f4be7d6",
  measurementId: "G-C3GVSLCR5B",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export { app, db, storage };
