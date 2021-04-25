const dbConnect = require('../../config/db.config')
const Products = (product) => {
  this.product_id = product.product_id
  this.description = product.description
}

Products.getAllProducts = (result) => {
  dbConnect.query('SELECT * FROM products', (err, res) => {
    if (err) {
      console.log('error in fetching products', err)
      result(null, err)
    } else {
      console.log('products feched success fully')
      result(null, res)
    }
  })
}

Products.createNewProduct = (prodReqData, result) => {
  dbConnect.query('INSERT INTO products SET ?', prodReqData, (err, res) => {
    if (err) {
      console.log('error in fetching Products', err)
      result(null, err)
    } else {
      console.log('Product inserted')
      result(null, res)
    }
  })
}

module.exports = Products
