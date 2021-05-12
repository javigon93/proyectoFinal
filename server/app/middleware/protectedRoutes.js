const express = require('express');
const protectedRoutes = express.Router();
const jwt = require('jsonwebtoken');
protectedRoutes.use((req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    if (token) {
        jwt.verify(token, 'secretoSportsHub', (err, decoded) => {
            if (err) {
                res.status(400)
                 res.send({ mensaje: 'Token inválida' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(400)
        res.send({
            mensaje: 'Token no proveída.'
        });
    }
});

module.exports=protectedRoutes;