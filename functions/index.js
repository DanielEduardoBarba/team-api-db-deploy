//import needed functions
import { getAllContacts, getContact, createContact } from "./src/functions.js";
import functions from "firebase-functions";
import express from "express";
import cors from "cors";

//for dev use, what should home hyperlink display?
const hosting = "http://127.0.0.1:5002/"

//creates express object and uses proper security and formatting
const app = express();
app.use(cors());
app.use(express.json())

//routes
app.get('/allcontacts', getAllContacts)
app.get('/getcontact/:name', getContact)
app.post('/createcontact', createContact)


// home page with hyperlinks toroutes
app.get('/', (req, res) => {
  res.sendFile("../public/index.html")
});

//listens through firebase functions
export const api = functions.https.onRequest(app);




