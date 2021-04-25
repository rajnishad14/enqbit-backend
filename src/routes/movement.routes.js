const express = require('express')
const router = express.Router()

const movementController = require('../controller/movement.controller')

router.get('/', movementController.getMovementList)
router.post('/', movementController.createNewMovement)

module.exports = router
