const router = require("express").Router();
const {
  allPost,
  postForm,
  saveForm,
  editForm,
  updatePost,
  viewPost,
  deletePost,
} = require("./UserController");

router.get("/", allPost);
router.get("/create", postForm);
router.post("/create", saveForm);
router.get("/edit/:id", editForm);
router.post("/update/:id", updatePost);
router.get("/post/:id", viewPost);
router.get("/delete/:id", deletePost);

// Home Route Example
router.get('/', (req, res) => {
    res.render('home')
})

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
