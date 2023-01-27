import express from "express";
import cors from "cors";
import { dataBase } from "./dbConnect.js";
import { FieldValue } from "firebase-admin/firestore";
//import functions from "firebase-functions";

const collectionName = "contacts"
const app = express();
app.use(cors());
app.use(express.json())
// const functions = require("firebase-functions");

// get all contacts
// export async function getAllContacts(req, res) {
//     const db = dbConnect()
//     const collection = await db.collection(collectionName).orderBy('iat', "desc").get();
//     const contacts = contacts.docs.map( doc => ({...doc.data(), restId: doc.id}) );
//     res.send(contacts)
// };

// create new contact
// export async function createContacts(req, res) {

const newContact={
    name: "jimbo",
    number: 52342134134,
    notes:"cool guy"
}

    const db = dataBase
    //let newContact = req.body

    newContact.iat = FieldValue.serverTimestamp();
     db.collection(collectionName).add(newContact)
    //res.status(201).send("Added New Contact")
// };