'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/image-uploader')
        .then(() =>{
            console.log("Connection to the database successfully established...");

            // Creación del servidor
            app.listen(port, () => {
                console.log("Servidor ON --> localhost:3700 <--");
            });
        })
        .catch(err => {
            console.log(err)
        });