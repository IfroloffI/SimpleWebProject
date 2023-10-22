const express = require('express');
const app = express();
const port = 3000;
const db = require("./models");

//'localhost:' + port + '/posts';

// Routers
const postRouter = require('./routes/posts');
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server is running on port " + port);
    });
});
