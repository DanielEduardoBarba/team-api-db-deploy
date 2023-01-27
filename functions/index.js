
import functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// setup routes
app.get('/ReadContact', (req, res) => {
  res.send('This is a new contact');
});

app.get('/test2', (req, res) => {
  res.send('This is another get paage');
});

app.post("/AddContact", (req, res)=> {
    res.send ('post a contact')
})

export const api = functions.https.onRequest(app);