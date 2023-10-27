const express = require("express");
const router = express.Router();
const { comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const _comments = await comments.findAll({ where: { postId: postId } });
  res.json(_comments);
});

router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  await comments.create(comment);
  res.json(comment);
});

module.exports = router;
