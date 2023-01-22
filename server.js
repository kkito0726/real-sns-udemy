const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");
const PORT = 3000;

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(PORT, () => console.log("サーバーが起動しました"));
