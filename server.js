const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers");
const sequelize = require("./config/connection");

// MiddleWare
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

//Handlebars
app.engine("hbs", exphbs.engine({extname: ".hbs"}));
app.set("view engine", "hbs");



//turn on connection to db and server
sequelize.sync({force: true}).then(()=>{
  app.listen(PORT,() =>console.log('Now Listening'))
})