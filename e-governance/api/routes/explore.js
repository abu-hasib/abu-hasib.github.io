// @import modules
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'wait while we get information on exploration'
  })
})


module.exports = router;