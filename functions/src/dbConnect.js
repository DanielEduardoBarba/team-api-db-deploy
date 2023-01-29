//import needed functions and tools
import { initializeApp, cert} from "firebase-admin/app";
import{ getFirestore } from "firebase-admin/firestore"
import { service_account } from "./secrets.js";

//start firebase database connection
initializeApp({
    //use secrets.js as certification from firestore's genereated json key
    credential: cert(service_account)
})

//export database object
export const dataBase = getFirestore()

