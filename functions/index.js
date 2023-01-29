//import needed functions
import { getAllContacts, getContact, createContact } from "./src/functions.js";
import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllContacts, getContacts, createContacts } from "./src/functions.js";

//for dev use, what should home hyperlink display?
const hosting = "http://127.0.0.1:5002/"

//creates express object and uses proper security and formatting
const app = express();
app.use(cors());
app.use(express.json())

//routes
app.get('/allContacts', getAllContacts)
app.get('/Contacts/:name', getContacts)
app.post('/Contact', createContacts)


// home page with hyperlinks toroutes
app.get('/', (req, res) => {
  res.sendFile("../public/index.html")
});

app.get('/test2', (req, res) => {
  res.send('This is another get page');
});



export const api = functions.https.onRequest(app);