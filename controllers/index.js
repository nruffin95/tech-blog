const router = require("express").Router();
const { allPost, postForm, saveForm } = require("./UserController");

router.get("/post", allPost);
router.get("/create", postForm);
router.post("/create", saveForm);

// Home Route Example
router.get('/', (req, res) => {
    res.render('home')
})

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
