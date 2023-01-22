const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  // ユーザー登録
  try {
    const newUser = await User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
