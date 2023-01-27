import functions from "firebase-functions";
import { express } from "express";
import cors from "cors";

import { getAllContacts, getContacts, createContact };

const app = express()

app.use( cors())
app.use(express.json())

//routes
app.get('/allContacts', getAllContacts)
app.get('/contacts', getContacts)
app.post('/Contact', createContact)