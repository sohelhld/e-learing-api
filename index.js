const express = require('express');
const { connected } = require('./src/db/db');
require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.send('Working')
})

app.listen(port, async() => {
    try {
        await connected;
        console.log('Connected with DB');
    } catch (error) {
        console.log('Connection Faild', error);
        
    }
    console.log(`Server is listening on port https://localhost:${port}`);

});