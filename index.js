const express = require("express"); // buscando o express no node_modules
const path = require("path");
const routes =  require("./routes/routes");                                                                                                                                                                                                                                                                 
const connectDb = require("./database/db");
let bodyParser = require('body-parser')

connectDb();

const app = express(); // função a ser executada  // app é o responsavel pelo Projeto
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json())
app.use(routes);


app.listen(port, () => 
console.log(`Servidor rodando na porta localhost:${port}`)
);
