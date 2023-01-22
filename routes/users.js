const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("user router");
});

router.get("/profile", (req, res) => {
  res.send("profile router");
});

module.exports = router;
