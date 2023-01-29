
import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllContacts, getContacts, createContact } from "";

const app = express();
app.use(cors());

app.use(express.json())

//routes
app.get('/allContacts', getAllContacts)
app.get('/Contacts/:name', getContact)
app.post('/Contact', createContact)


// setup routes
app.get('/ReadContact', (req, res) => {
  res.send('This is a new contact');
});

app.get('/test2', (req, res) => {
  res.send('This is another get page');
});



export const api = functions.https.onRequest(app);