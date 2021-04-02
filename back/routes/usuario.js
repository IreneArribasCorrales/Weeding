const express = require("express");

const bcrypt = require("bcrypt");

const Usuario = require("../models/usuario");
const usuario = require("../models/usuario");

const app = express();

app.post("/usuario", function (req, res) {
  console.log(req);
  let body = req.body;
  let usuario = new Usuario({
    name: body.name,
    mail: body.mail,
    password: bcrypt.hashSync(body.password, 10),
    assistance: body.assistance,
  });
  usuario.save((err, usuarioBD) => {
    if (err) {
      return res.status(400).json({
        status: false,
        err,
      });
    }
    res.json({
      status: true,
      usuario: usuarioBD,
    });
  });
});

module.exports = app;
