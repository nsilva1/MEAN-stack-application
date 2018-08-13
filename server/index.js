const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const port = process.env.PORT || 3000;
var app = express();
const route = require('./route/routes.js');


//MongoClient.connect('mongodb://localhost:27017/shoppinglist', (err, client) => {
//    if(err){
//        return console.log('Unable to connect to MongoDB server');
//    }
//    console.log('Connected to MongoDB server');
//    const db = client.db('shoppinglist');
//
//    db.collection('List').insertOne({
//        name : 'apple',
//        price : 3.59
//    }, (err, result) => {
//        if(err){
//            return console.log('Unable to insert into List', err);
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2))
//    });
//
//    client.close();
//});

//Connect to mongodb server
mongoose.connect('mongodb://localhost:27017/shoppinglist');

//print to screen if connected to mongodb
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB from port ${port}`)
});

//display error if it occurs
mongoose.connection.on('error', (err) => {
    console.log(err);
});

app.use(cors());

app.use(bodyparser.json());

app.use('/api', route);

app.get('/', (req, res) => {
    res.send('We are here dude');
});

app.listen(port, () => {
    console.log('Server started at port :' +port);
});