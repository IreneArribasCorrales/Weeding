const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es necesario"],
  },
  mail: {
    type: String,
    required: [true, "El email es necesario"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es necesaria"],
  },
  assistance: {
    type: Boolean,
    default: false,
  },
});

usuarioSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

usuarioSchema.plugin(mongooseUniqueValidator, {
  message: "{PATH} debe ser único",
});

module.exports = mongoose.model("Usuario", usuarioSchema);
