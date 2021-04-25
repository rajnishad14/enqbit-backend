const movementMOdal = require('../modal/movement.modal')

exports.getMovementList = (req, res) => {
  movementMOdal.getAllMovements((err, data) => {
    console.log('here we are')
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
}

exports.createNewMovement = (req, res) => {
  const moveReqData = req.body
  movementMOdal.createNewMovements(moveReqData, (err, product) => {
    if (err) {
      res.send(err)
    }
    res.send(product)
  })
}
