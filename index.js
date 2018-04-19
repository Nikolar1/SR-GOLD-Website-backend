var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
const port = 3000;
mongoose.Promise = global.Promise;
var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://kay:LLTxqdo5BPi3nt7i@SR-GOLD-Bazapodataka.mongodb.net/test";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});
mongoose.connect(uri);
var db = mongoose.connection;
var app = express();
var Objava = require('./model/sema');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
