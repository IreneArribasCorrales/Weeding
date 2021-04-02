const express = require("express");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const Usuario = require("../models/usuario");

const app = express();

app.post("/login", (req, res) => {
  let body = req.body;

  Usuario.findOne({ mail: body.mail }, (err, usuarioBD) => {
    if (err) {
      return res.status(500).json({
        status: false,
        err,
      });
    }
    if (!usuarioBD) {
      return res.status(400).json({
        status: false,
        err: {
          message: "Usuario o contraseña incorrectos",
        },
      });
    }
    console.log(body.password);
    console.log(usuarioBD.password);
    if (!bcrypt.compareSync(body.password, usuarioBD.password)) {
      return res.status(400).json({
        status: false,
        err: {
          message: "Usuario o Contraseña incorrectos",
        },
      });
    }
    let token = jwt.sign(
      {
        usuario: usuarioBD,
      },
      "secret",
      { expiresIn: 60 * 60 }
    );
    res.json({
      status: true,
      usuario: usuarioBD,
      token,
    });
  });
});

module.exports = app;
