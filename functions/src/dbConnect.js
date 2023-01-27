import { initializeApp, cert} from "firebase-admin/app";
import{ getFirestore } from "firebase-admin/firestore"
import { service_account } from "./secrets.js";

initializeApp({
    credential: cert(service_account)
})

export const dataBase = getFirestore()

