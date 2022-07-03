const Post = require("../models/Post");
// const express = require('express')
// const router = express.Router()

// router.get("/", (req, res) => {
//   res.render("home");
// });

const allPost = async (req, res) => {
  await res.render('home')
}

const postForm = async (req, res) => {
  await res.render('create')
}
const saveForm = async (req, res) => {
  const {title, description, markdown} = await req.body;
  const post = await Post.create({
    title: title,
    description: description,
    markdown: markdown
  }).catch(error => console.log(error));
  console.log(post)

  res.redirect('/')
  await res.render('create')
}

module.exports = { allPost, postForm, saveForm };
