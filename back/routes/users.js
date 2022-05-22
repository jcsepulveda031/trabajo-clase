var express = require('express');
const usuarioModels = require('../models/usuarioModels');
var router = express.Router();



/* GET users listing. */
router.post('/', function(req, res) {
    var newU = new usuarioModels({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,

    });

    newU.save();
    res.send({ status: 200, mensaje: "exito", username: newU });
});

router.get("/", (rest, res) => {
    usuarioModels.find((err, response) => {
        if (err) {
            res.send({
                status: 500,
                message: "Error",
                error: err

            });
        } else {
            res.send(response);
        }
    })

});
module.exports = router;