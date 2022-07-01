const router = require("express").Router();
const articleRouter = require("../controllers/articles-routes");

router.use("/articles", articleRouter);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
