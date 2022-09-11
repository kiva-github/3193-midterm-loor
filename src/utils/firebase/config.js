// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe1ZbwKCp8jtakfiHkzpcfgCq20bDmkCo",
  authDomain: "sticker-vending.firebaseapp.com",
  projectId: "sticker-vending",
  storageBucket: "sticker-vending.appspot.com",
  messagingSenderId: "271235635722",
  appId: "1:271235635722:web:ab94f2372c64b59ede5df3",
  measurementId: "G-LKHF0M0GZE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const analytics = getAnalytics(app);


// set codes
export const setCodes = (code, assignedTo) => {
  const assignedRef = doc(db, 'active-codes', code)
  setDoc(assignedRef, { assignedTo: assignedTo, used: true}, {merge: true })
  console.log('done')
}