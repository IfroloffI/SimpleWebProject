const express = require("express");
const router = express.Router();
const { posts } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await posts.findAll();
  res.json(listOfPosts);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await posts.findByPk(id); //posts.destroy({...}) for delete some data from DB
  res.json(post); // update({...}) for update data of this tost     router.put
});

router.post("/", async (req, res) => {
  const post = req.body;
  await posts.create(post);
  res.json(post);
});

module.exports = router;
