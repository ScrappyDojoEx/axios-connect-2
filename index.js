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
    let userData = req.body;
    
    for (let {username, password} of users){
        if (username === userData.username){
            res.send("User already exists!");
            return;
        }
    }

    users.push(userData);
    res.send("Successfully registered!");
});

app.get('/get-all-users', (req, res) => {
    res.json(users);
})

app.listen(port);