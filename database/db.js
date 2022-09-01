const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(
      // função conect está dentro da biblioteca moongose
      "mongodb+srv://hoot:admin@todolist.0q1lczz.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true, //propriedades para não dar erro.
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Banco de dados - conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectDb;
