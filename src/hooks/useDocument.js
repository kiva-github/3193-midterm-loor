import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase/config";

export const useDocument = async (docID) => {
    const docRef = doc(db, "active-codes", docID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}

