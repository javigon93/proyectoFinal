const express = require('express');
let User = require('../models/user.js');
const jwt = require('jsonwebtoken');
let router = express.Router();

const secreto = "secretoSportsHub";
let generarToken = login => {
    return jwt.sign({ login: login }, secreto, { expiresIn: "2 hours" });
};

router.post('/', (req, res) => {
    let query = {
        name: req.body.name,
        password: req.body.password
    }
    User.findOne(query).then(resp => {

        if (resp != null) {
            res.send({ ok: true, token: generarToken(query.name) });
        }
        else {
            res.send({ ok: false });
        }
    })
});

module.exports = router;