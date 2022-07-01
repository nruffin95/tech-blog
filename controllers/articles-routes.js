const express = require('express')
const Article = require("../models/aticles")
const router = express.Router()

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get('/new', (req, res) => {
    res.render("articles");
})

router.get('/:id', (req, res) => {

})

router.post('/', async (req, res) => {
   Article.create({
     title: req.body.title,
     description: req.body.description,
     markdown: req.body.markdown,
   })
     .then((articleData) => res.json(articleData))
     .catch((err) => {
       console.log(err);
       res.status(500).json(err);
     });
})


module.exports = router