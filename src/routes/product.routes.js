const express = require('express')
const router = express.Router()

const productController = require('../controller/product.controller')

router.get('/', productController.getProductList)
router.post('/', productController.createNewProduct)

module.exports = router
