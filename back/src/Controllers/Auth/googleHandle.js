const mongoose = require('mongoose');
const response = require('../res').msg

exports.googleLogin = function(req, res) {
    const body = req.body

    //Si il manque l'id retourner une erreur
    if (!body.id) return res.status(response.bad_request).send(response.bad_request_m)

    res.json(req.body)
}

exports.googleRegister = function(req, res) {
    const body = req.body

    //Si il manque les valuers fullname mail ou body, retourner une erreur
    if (!body.fullname || body.mail || body.id) return res.status(response.bad_request).send(response.bad_request_m)
    
    res.json(req.body)
}