var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
const port = 3000;
mongoose.Promise = global.Promise;
//var uri = "mongodb+srv://kay:LLTxqdo5BPi3nt7i@SR-GOLD-Bazapodataka.mongodb.net/Objave"
var uri = 'mongodb+srv://SRGOLD:LLTxqdo5BPi3nt7i@sr-gold-bazapodataka-qhbns.mongodb.net/Objave?retryWrites=true'
//var uri = 'mongodb://SRGOLD:LLTxqdo5BPi3nt7i@sr-gold-bazapodataka-shard-00-00-qhbns.mongodb.net:27017,sr-gold-bazapodataka-shard-00-01-qhbns.mongodb.net:27017,sr-gold-bazapodataka-shard-00-02-qhbns.mongodb.net:27017/Objave?ssl=true&replicaSet=SR-GOLD-Bazapodataka-shard-0&authSource=admin&retryWrites=true'
var db = mongoose.connection;
var app = express();
var Objava = require('./model/sema');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  mongoose.connect(uri);
  var db = mongoose.connection;
  Objava.find({}, function(err, objave){
    if(err){
      console.log(err);
    }
    else{
      res.json(objave);
    }
    mongoose.connection.close();
  })
})

app.get('/Knjig', function(req, res){
  mongoose.connect(uri);
  var db = mongoose.connection;
  Objava.find({Strana: "Knjig"}, function(err, objave){
    if(err){
      console.log(err);
    }
    else{
      res.json(objave);
    }
    mongoose.connection.close();
  })
})

app.get('/Poljo', function(req, res){
  mongoose.connect(uri);
  var db = mongoose.connection;
  Objava.find({Strana: "Poljo"}, function(err, objave){
    if(err){
      console.log(err);
    }
    else{
      res.json(objave);
    }
    mongoose.connection.close();
  })
})

app.get('/Posta', function(req, res){
  mongoose.connect(uri);
  var db = mongoose.connection;
  Objava.find({Strana: "Posta"}, function(err, objave){
    if(err){
      console.log(err);
    }
    else{
      res.json(objave);
    }
    mongoose.connection.close();
  })
})

app.get('/Ceno', function(req, res){
  mongoose.connect(uri);
  var db = mongoose.connection;
  Objava.find({Strana: "Ceno"}, function(err, objave){
    if(err){
      console.log(err);
    }
    else{
      res.json(objave);
    }
    mongoose.connection.close();
  })
})

app.listen(port);
