const Post = require("../models/Post");
// const express = require('express')
// const router = express.Router()

// router.get("/", (req, res) => {
//   res.render("home");
// });

const allPost = async (req, res) => {
  const posts = await Post.findAll({
    raw:true
  }).catch(error => console.log(error))
  await res.render('home', {posts})
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
  
  await res.redirect('/')
}

const editForm = async (req, res) => {
  const {id} = await req.params;
  const post = await Post.findOne({
    where: {
      id: id,
    },
    raw: true,
  }).catch((error) => console.log(error));
    res.render("edit", {post});
}

const updatePost = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const selector = {where:{id:id}}
  await Post.update(data, selector).catch((error) => console.log(error));
  res.redirect("/");
};

const viewPost = async (req, res) => {
  const { id } = await req.params;
  const post = await Post.findOne({
    where: {
      id: id,
    },
    raw: true,
  }).catch((error) => console.log(error));
  res.render("post", { post });
};

const deletePost = async (req, res) => {
  const { id } = await req.params;
  const post = await Post.destroy({
    where: {
      id: id,
    },
    raw: true,
  }).catch((error) => console.log(error));

  res.redirect("/");
};





module.exports = {
  allPost,
  postForm,
  saveForm,
  editForm,
  updatePost,
  viewPost,
  deletePost,
};
