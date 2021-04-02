const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors()); // https://stackoverflow.com/questions/36840396/fetch-gives-an-empty-response-body

app.use(express.json());
app.use(express.urlencoded());

app.use(require("./routes/usuario"));
app.use(require("./routes/login"));

mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(
  "mongodb://localhost:27017/wedding",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) throw err;
    console.log("Base de datos activa");
  }
);

app.listen(3000, () => {
  console.log("Escuchando puerto 3000");
});
