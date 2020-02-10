const express = require('express');
const Hubs = require('./data/hubs-model.js');
const server = express();

server.get('/', (req, res) => {
    res.json({hello: 'world'})
})

const port = 5000;

server.get('/api/hubs', (req, res) => {
    Hubs.find().then(hubs => {
        res.status(200).json(hubs);
    }).catch( err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'oops'})
    });
})

server.listen(port, () => {
    console.log(`API on port ${port}`);
})    