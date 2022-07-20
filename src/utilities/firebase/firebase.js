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

//this will create and initialise firebase app instance and connect to the instance we have on firebase
const firebaseApp = initializeApp(firebaseConfig);

// this will generate authentication cridentials from the provider (GOOGLE)
const googleProvider = new GoogleAuthProvider();

// this will prompt the users/clients to select google account that they want to use to sign-in
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//this will return the authentication instance that is associated with the provided firebaseApp instance
export const auth = getAuth();

// this function handles the sign-in with google account
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//this will return the firestore instance that is associated with the provided firebaseApp instance
export const db = getFirestore();

//this is function that handles the creation of users document.
/* 
  it takes the user credentials from the signInWithGooglePopup while signing in with google provider
  and also userName while signing in with email and password
*/
export const createAuthUserRefDocument = async (userAuth, userName = {}) => {
  /* this is to check if the user credential has been passed on not
    if it hasn't been passed, the code should return and stop running.
    It it has been passed the code should proceed
  */
  if (!userAuth) return;

  //this helps to get a document pertaining to the user/client
  const userRefDocument = doc(db, "users", userAuth.uid);

  // this is used to read the reference document if it is present
  const userSnapshot = await getDoc(userRefDocument);

  // if the reference document does not exist, a new one should be created
  if (!userSnapshot.exists()) {
    // getting the value of display name and email from the user credential
    const { displayName, email } = userAuth;

    // setting time and date that the new reference document will be created
    const createdAt = new Date();

    try {
      //this is to now set/write the document using the above data
      await setDoc(userRefDocument, {
        displayName,
        email,
        createdAt,
        /*the ...userName comes from the signing in with email and password as name will be 
          regarded as null, it is crucial to import name value from displayName from the sign-up form        
        */
        ...userName,
      });
    } catch (error) {
      console.log(`there was an error in getting the user's document`, error);
    }
  }
  // return the set reference document or the one initially available
  return userRefDocument;
};

//this function helps to create new user/cliet with email and password (signing up)
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  //if either email or password is not received from the sign-up page, return and do nothing
  if (!email || !password) return;

  //else return the user credential that will be used to create a new reference document.
  return createUserWithEmailAndPassword(auth, email, password);
};

//this function helps to sign-in authenticated users/clients
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  // if email or password is not recieved return and do nothing
  if(!email || !password) return;
  // else return the user creditential
  return signInWithEmailAndPassword(auth, email, password);
};
