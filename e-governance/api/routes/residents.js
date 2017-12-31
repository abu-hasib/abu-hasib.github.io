// @import modules
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'wait while we get information on all residents'
  })
})

router.get('/health', (req, res, next) => {
  res.status(200).json({
    message: 'wait while we get information on all residents health'
  })
})

router.get('/transportation', (req, res, next) => {
  res.status(200).json({
    message: 'wait while we get information on all residents transportation'
  })
})

router.get('/housing-development', (req, res, next) => {
  res.status(200).json({
    message: 'wait while we get information on all residents h&d'
  })
})

router.get('/public-safety', (req, res, next) => {
  res.status(200).json({
    message: 'wait while we get information on all residents public safety'
  })
})


router.get('/environment', (req, res, next) => {
  res.status(200).json({
    message: 'wait while we get information on all residents environ'
  })
})


module.exports = router;