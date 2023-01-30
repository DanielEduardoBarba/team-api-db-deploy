//use necessary functions and tools for functions
import express from "express";
import cors from "cors";
import { dataBase } from "./dbConnect.js";
import { FieldValue } from "firebase-admin/firestore";

//where the database will navigate by default
const collectionName = "contacts"

//create express object and provide security and proper formatting
const app = express();
app.use(cors());
app.use(express.json())


//get all contacts
export async function getAllContacts(req, res) {
    const db = dataBase

    const collection = await db.collection(collectionName).orderBy('iat', "desc").get();
    const contacts = collection.docs.map( doc => ({...doc.data(), ID: doc.id}) );

    res.send(contacts)
    //console.table(contacts)
};

//get specific contact
export async function getContacts(req, res) {
    const db = dataBase

    //pull data from firestore database
    const collection = await db.collection(collectionName).orderBy('iat', "desc").get();
    const contacts = collection.docs.map( doc => ({...doc.data(), ID: doc.id}) );

   // this filter the contacts by the name matching the name pass in the parameters. 
const filteredContacts =contacts.filter((x)=>{
       return String(x["name"]).toLowerCase()===req.params.name.toLowerCase();
    })

    res.send(filteredContacts)
    console.table(filteredContacts)
};


const newContact={
    name: "jimbo",
    number: 52342134134,
    notes:"cool guy"
}

// create new contact
export async function createContact(req, res) {
    const db = dataBase
    let newContact = req.body

    newContact.iat = FieldValue.serverTimestamp();

     await db.collection(collectionName).add(newContact)
     .then(()=> {
        res.status(201).send("Added New Contact Succesfully!")
     })
     .catch(console.error)
 };