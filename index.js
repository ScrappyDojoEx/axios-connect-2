'use strict'

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

let users = [];

app.get('/', (req, res) => {
    res.send();
});

app.post('/register', (req, res) => {
    let userData = req.body.data;
    users.push(userData);
    res.send("Successfully registered!");
})

app.listen(port);