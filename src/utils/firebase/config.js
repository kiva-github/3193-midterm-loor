// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, setDoc, deleteDoc, writeBatch } from "firebase/firestore";
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

// update codes
export const updateCodes = (code, assignedTo) => {
  const assignedRef = doc(db, 'active-codes', code)
  setDoc(assignedRef, { assignedTo: assignedTo, used: true}, {merge: true })
  console.log('done')
}

// upload codes (batched write)
// export const uploadCodes = async ({ codes }) => {
//   const batch = writeBatch(db)
//   const codeColRef = collection(db, "active-codes")
//   codes && codes.forEach(code => {
//     console.log('batch set')
//     batch.set(codeColRef, {assignedTo: null, used: false})
    
//   })
//   await batch.commit()
//   console.log('batch committed')
// }

// upload organizations (batched write)
// export const uploadOrganizations = ({ organizations }) => {

// }

// add code to organization's voted for codes
export const addToOrganizationCollection = async (enteredCodes) => {
  enteredCodes.forEach((c) => {
    const colRef = collection(db, 'results', c.assignment, 'voted-codes')
    setDoc(doc(colRef, c.code), c)
  })
  
}

// remove used codes from active codes
export const removeFromActiveCodes = async (enteredCodes) => {
  enteredCodes.forEach((enteredCode) => {
    deleteDoc(doc(db, 'active-codes', enteredCode.code))
  })
}