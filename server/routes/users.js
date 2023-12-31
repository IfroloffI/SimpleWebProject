const express = require("express");
const router = express.Router();
const { users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { userName, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    users.create({
      userName: userName,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const user = await users.findOne({ where: { userName: userName } });
  if (!user) {
    res.json({ error: "User doesn`t exist!" });
  } else {
    bcrypt.compare(password, user.password).then((match, flag) => {
      if (!match) {
        res.json({ error: "Wrong password" });
      } else {
        const accessToken = sign(
          { userName: user.userName, id: user.id },
          "secret"
        );

        res.json(accessToken);
      }
    });
  }
});

module.exports = router;
