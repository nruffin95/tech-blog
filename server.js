const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const path = require("path");
const routes = require("./controllers");
const sequelize = require("./config/connection");

//Handlebars
app.set('view engine', 'handlebars')
app.engine("handlebars", hbs.engine);

// MiddleWare
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// Home Route Example
app.get('/', (req, res) => {
    res.render('index', {articles: articles})
})

//turn on connection to db and server
sequelize.sync({force: true}).then(()=>{
  app.listen(PORT,() =>console.log('Now Listening'))
})