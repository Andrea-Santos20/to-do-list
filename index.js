const express = require("express"); // buscando o express no node_modules
const path = require("path");
const routes =  require("./routes/routes");
const connectDb = require("./database/db");
var bodyParser = require('body-parser')

connectDb();

const app = express(); // função a ser executada  // app é o responsavel pelo Projeto
const port = 3000;
//const routes = require("./routes/routes")

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => 
console.log(`Servidor rodando na porta localhost:${port}`)
);
