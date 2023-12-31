const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const postRouter = require("./routes/posts");
app.use("/posts", postRouter);
const commentRouter = require("./routes/comments");
app.use("/comments", commentRouter);
const userRouter = require("./routes/users");
app.use("/auth", userRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("Server is running on port " + port);
  });
});
