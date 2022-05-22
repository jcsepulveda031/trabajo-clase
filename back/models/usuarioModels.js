const mongo = require('mongoose');

const usuarioSchema = mongo.Schema({

    username: String,
    password: String,
    email: String,

}, { timestamp: true });

module.exports = mongo.model('tb_usuario', usuarioSchema);