var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const port = 3000;
mongoose.Promise = global.Promise;
//var uri = "mongodb+srv://SRGOLD:<PASSWORD>@sr-gold-bazapodataka-qhbns.mongodb.net/test?retryWrites=true"
var uri = 'mongodb+srv://Website-Backend:LLTxqdo5BPi3nt7i@sr-gold-bazapodataka-qhbns.mongodb.net/Objave';
/*var uri = 'mongodb://SRGOLD:LLTxqdo5BPi3nt7i@' +
    'sr-gold-bazapodataka-shard-00-00-qhbns.mongodb.net:27017,' +
    'sr-gold-bazapodataka-shard-00-01-qhbns.mongodb.net:27017,' +
    'sr-gold-bazapodataka-shard-00-02-qhbns.mongodb.net:27017/Objave' +
    //'?replicaSet=SR-GOLD-Bazapodataka-shard-0&authMechanism=SCRAM-SHA-1&authSource=admin'
    'ssl=true&replicaSet=SR-GOLD-Bazapodataka-shard-0&authSource=admin'
*///var uri = 'mongodb://SRGOLD:LLTxqdo5BPi3nt7i@sr-gold-bazapodataka-shard-00-00-qhbns.mongodb.net:27017,sr-gold-bazapodataka-shard-00-01-qhbns.mongodb.net:27017,sr-gold-bazapodataka-shard-00-02-qhbns.mongodb.net:27017/test?ssl=true&replicaSet=SR-GOLD-Bazapodataka-shard-0&authSource=admin&retryWrites=true'
//var uri = 'mongodb://SR-GOLD-Website:345ovoje123website@ds020228.mlab.com:20228/sr-gold-db'
var db = mongoose.connection;
var app = express();
var Objava = require('./model/sema');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  mongoose.connect(uri, function(err){
    if(err){
      console.log(err);
    }
    else{
    }
  });
  var db = mongoose.connection;

  Objava.find({}, function(err, objave){
    if(err){
      console.log(err);
    }
    else{
      res.send(objave);
    }
  mongoose.connection.close();
  })
})


app.get('/Knjig', function(req, res){
  mongoose.connect(uri, function(err){
    if(err){
      console.log(err);
    }
    else{
    }
  });
  var db = mongoose.connection;
  Objava.find({Strana: "Knjig"}, function(err, objave){
    if(err){
      console.log(err);
    }
    else{
      res.send(objave);
    }
    mongoose.connection.close();
  })
})

app.get('/Poljo', function(req, res){
  mongoose.connect(uri, function(err){
    if(err){
      console.log(err);
    }
    else{
    }
  });
  var db = mongoose.connection;
  Objava.find({Strana: "Poljo"}, function(err, objave){
    if(err){
      console.log(err);
    }
    else{
      res.send(objave);
    }
    mongoose.connection.close();
  })
})

app.get('/Posta', function(req, res){
  mongoose.connect(uri, function(err){
    if(err){
      console.log(err);
    }
    else{
    }
  });
  var db = mongoose.connection;
  Objava.find({Strana: "Posta"}, function(err, objave){
    if(err){
      console.log(err);
    }
    else{
      res.send(objave);
    }
    mongoose.connection.close();
  })
})

app.get('/Ceno', function(req, res){
  mongoose.connect(uri, function(err){
    if(err){
      console.log(err);
    }
    else{
    }
  });
  var db = mongoose.connection;
  Objava.find({Strana: "Ceno"}, function(err, objave){
    if(err){
      console.log(err);
    }
    else{
      res.send(objave);
    }
    mongoose.connection.close();
  })
})

app.listen(port);
