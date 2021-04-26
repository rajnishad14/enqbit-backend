const dbConnect = require('../../config/db.config')
const Movement = (movement) => {
  this.movement_id = movement.movement_id
  this.timestamps = new Date()
  this.from_location_id = movement.from_location_id
  this.to_location_id = movement.to_location_id
}

Movement.getAllMovements = (result) => {
  dbConnect.query('SELECT * FROM productmovement', (err, res) => {
    if (err) {
      console.log('error in fetching movements', err)
      result(null, err)
    } else {
      console.log('movements feched success fully')
      result(null, res)
    }
  })
}

Movement.createNewMovements = (movReqData, result) => {
  console.log(movReqData)
  dbConnect.query(
    `INSERT INTO productmovement SET ?`,
    movReqData,
    (err, res) => {
      if (err) {
        console.log('error in fetching movements', err)
        result(null, err)
      } else {
        console.log('movements inserted')
        result(null, res)
      }
    }
  )
}

module.exports = Movement
