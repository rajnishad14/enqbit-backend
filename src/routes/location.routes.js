const express = require('express')
const router = express.Router()

const locationController = require('../controller/location.controller')

router.get('/', locationController.getLocationList)
router.post('/', locationController.createNewLocation)

module.exports = router
