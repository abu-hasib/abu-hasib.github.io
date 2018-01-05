// @import modules
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("business");
});

module.exports = router;
