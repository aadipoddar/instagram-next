import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCrYtSgZowvAPr_wjNeMrfbEh5a5R_mM7A",
    authDomain: "instagram-next-45c43.firebaseapp.com",
    projectId: "instagram-next-45c43",
    storageBucket: "instagram-next-45c43.appspot.com",
    messagingSenderId: "449819373897",
    appId: "1:449819373897:web:bf47d50dd338a14c056a98"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };