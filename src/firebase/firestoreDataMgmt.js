import myFirestore from "./firestoreInitialize.js";
import { collection, getDocs } from "firebase/firestore"

export async function getSvCarList(){
    const collectionRef = collection(myFirestore, "Vehiculos");
    const snapShot = await getDocs(collectionRef);
    let arrayOfCars = snapShot.docs.map( document => {
        let formattedDoc = {...document.data(), id: document.id} 
        //method .docs[x].data() extracts the doc.
        //property .docs[x].id has the id of the doc.
        return formattedDoc;
        })
      return arrayOfCars;
}