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
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

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

app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
