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
}, {collection: 'objave'});

var objava = module.exports = mongoose.model('objave', Sema);
