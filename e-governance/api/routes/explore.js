// @import modules
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("explore");
});

module.exports = router;
