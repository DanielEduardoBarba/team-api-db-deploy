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
    export async function getContact(req, res) {
    const db = dataBase

    //pull data from firestore database
    const collection = await db.collection(collectionName).orderBy('iat', "desc").get();
    const contacts = collection.docs.map( doc => ({...doc.data(), ID: doc.id}) );

   //return all data entries that match name criteria pass by request
    const passName =contacts.filter((element, index)=>{
         try{
            //console.log(element["name"].toUpperCase())
            return element["name"].toUpperCase() ==req.params.name.toUpperCase()
         }
         catch{}
    })

    //returns to browser array of objects matching name provided, or prompts contact not found
    passName.length ? res.send(passName) : res.send("Contact not found!")
    console.table(passName)
};

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