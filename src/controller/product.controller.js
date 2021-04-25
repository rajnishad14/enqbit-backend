const productModal = require('../modal/product.modal')

exports.getProductList = (req, res) => {
  productModal.getAllProducts((err, data) => {
    console.log('here we are')
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
}

exports.createNewProduct = (req, res) => {
  const prodReqData = req.body
  productModal.createNewProduct(prodReqData, (err, product) => {
    if (err) {
      res.send(err)
    }
    res.send(product)
  })
}
