'use strict'

var express = require('express');
var PhotoController = require('../controllers/photo.controller');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMddleware = multipart({ uploadDir: './uploads' });

// Rutas de los ejercicios
router.post('/upload', multipartMddleware, PhotoController.upload);

module.exports = router;