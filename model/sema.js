var mongoose = require('mongoose');

var Sema = mongoose.Schema({
    Naslov : {
        type : String,
        required : true
    },
    Tekst : {
        type : String,
        required:true
    },
    Datum : {
        type : String,
        required : true
    }
}, {collection: 'Objave'});

var objava = module.exports = mongoose.model('Objave', Sema);
