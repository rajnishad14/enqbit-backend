const express = require('express')
const port = process.env.PORT || 5000

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//root route
app.get('/', (req, res) => {
  res.send('hello World')
})

//product routes
const productRoutes = require('./src/routes/product.routes')
app.use('/api/v1/products', productRoutes)

//location routes
const locationRoutes = require('./src/routes/location.routes')
app.use('/api/v1/location', locationRoutes)

//movements routes
const movementRoutes = require('./src/routes/movement.routes')
app.use('/api/v1/movement', movementRoutes)

// listing to the server
app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})
