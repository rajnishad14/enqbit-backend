const locationModal = require('../modal/location.modal')

exports.getLocationList = (req, res) => {
  locationModal.getAllLocations((err, data) => {
    console.log('here we are')
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
}

exports.createNewLocation = (req, res) => {
  const locReqData = req.body
  locationModal.createNewLocations(locReqData, (err, location) => {
    if (err) {
      res.send(err)
    }
    res.send(location)
  })
}
