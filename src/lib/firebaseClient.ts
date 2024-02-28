import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgIE_CHXtWu8uDIEjJckj4YOI9e16W1RY",
  authDomain: "web-dev-explorer.firebaseapp.com",
  projectId: "web-dev-explorer",
  storageBucket: "web-dev-explorer.appspot.com",
  messagingSenderId: "664986948610",
  appId: "1:664986948610:web:b2175312467231e64d431b",
  measurementId: "G-7FFS1YT5RT",
};

const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export default firebaseApp;
