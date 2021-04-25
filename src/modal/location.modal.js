const dbConnect = require('../../config/db.config')
const Locations = (location) => {
  this.location_id = location.location_id
  this.description = location.description
}

Locations.getAllLocations = (result) => {
  dbConnect.query('SELECT * FROM locations', (err, res) => {
    if (err) {
      console.log('error in fetching locations', err)
      result(null, err)
    } else {
      console.log('locations feched success fully')
      result(null, res)
    }
  })
}

Locations.createNewLocations = (locReqData, result) => {
  dbConnect.query('INSERT INTO locations SET ?', locReqData, (err, res) => {
    if (err) {
      console.log('error in fetching locations', err)
      result(null, err)
    } else {
      console.log('locations inserted')
      result(null, res)
    }
  })
}

module.exports = Locations
