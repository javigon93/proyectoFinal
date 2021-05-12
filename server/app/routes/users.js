const express = require('express');
let User = require('../models/user.js');
let protectionMiddleware= require('../middleware/protectedRoutes');
let router = express.Router();

router.get('/', protectionMiddleware, (req, res) => {
    if (req.query.id) {

        User.findById(req.query.id).then(resultado => {
            res.status(200)
                .send({ ok: true, resultado: resultado });
        }).catch(error => {
            res.status(500)
                .send({ ok: false, error: "Error obteniendo Usuario" });
        });
    }
    else {
        User.find().then(resultado => {
            res.status(200)
                .send({ ok: true, resultado: resultado });
        }).catch(error => {
            res.status(500)
                .send({ ok: false, error: "Error obteniendo Usuario" });
        });

    }
});

router.post('/', (req, res) => {
    let newUser = new User({
        name: req.body.name,
        surname: req.body.surname,
        password: req.body.password
    });
    newUser.save().then(resultado => {
        res.status(200)
            .send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400)
            .send({
                ok: false,
                error: "Error añadiendo Usuario"
            });
    });
});


router.put('/', (req, res) => {
    User.findByIdAndUpdate(req.query.id, {
        $set: {
            name: req.query.name,
            surname: req.query.surname,
            password: req.query.password
        }
    }, { new: true }).then(resultado => {
        res.status(200)
            .send({ ok: true, resultado: resultado });
    }).catch(error => {
        res.status(400)
            .send({
                ok: false,
                error: "Error actualizando Usuario"
            });
    });
});

router.delete('/', (req, res) => {
    User.findByIdAndRemove(req.query.id)
        .then(resultado => {
            res.status(200)
                .send({ ok: true, resultado: resultado });
        }).catch(error => {
            res.status(400)
                .send({
                    ok: false,
                    error: "Error eliminando Usuario"
                });
        });
});

module.exports = router;