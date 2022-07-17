import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4_JvHKx2DOI_HG11L870wwXilK6Wz-qM",
  authDomain: "soa-store-db.firebaseapp.com",
  projectId: "soa-store-db",
  storageBucket: "soa-store-db.appspot.com",
  messagingSenderId: "313422008500",
  appId: "1:313422008500:web:4915eb3b37849670f947e1",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createAuthUserRefDocument = async (userAuth, userName = {}) => {
  const userRefDocument = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userRefDocument);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRefDocument, {
        displayName,
        email,
        createdAt,
        ...userName
      });
    } catch (error) {
      console.log(`there was an error in getting the user's document`, error);
    }
  }
  return userRefDocument;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}