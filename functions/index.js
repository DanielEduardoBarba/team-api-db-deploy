
import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllContacts, getContacts, createContacts } from "./src/functions.js";

const app = express();
app.use(cors());

app.use(express.json())

//routes
app.get('/allContacts', getAllContacts)
app.get('/Contacts/:name', getContacts)
app.post('/Contact', createContacts)


// setup routes
app.get('/ReadContact', (req, res) => {
  res.send('This is a new contact');
});

app.get('/test2', (req, res) => {
  res.send('This is another get page');
});



export const api = functions.https.onRequest(app);