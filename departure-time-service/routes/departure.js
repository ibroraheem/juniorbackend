const express = require('express')
const router = express.Router()
const getDepartureTime = require('../controllers/departure')

router.get('/departure-time', getDepartureTime)

module.exports = router