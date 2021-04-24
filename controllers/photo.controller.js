'use strict'

var Photo = require('../models/photo');

var controller = {
    
    upload: function(req, res){
        var fileName = 'Imagen no subida';

        if(req.files){
            console.log(req.files)
            var filePath = req.files.file.path;
            console.log(filePath);
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                var photo = new Photo();
                photo.file = fileName;

                photo.save((err, photoStored) =>{
                    if(err){
                        return res.status(500).send({
                            message: 'Error al guardar el ejercicio'
                        });
                    }

                    if(!photoStored){
                        return res.status(400).send({
                            message: 'El ejercicio no se ha guardado'
                        });
                    }

                    return res.status(200).send({
                        message: 'sucess',
                        photoStored
                    });
                });
            }
        }
    }
}

module.exports = controller;