const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const axios = require('axios')

app.get('/', async (req, res) => {
  try {
    const polygon = await axios({
      url: 'https://mocki.io/v1/8e889d1f-77cc-4838-9caf-97d3a421b95c',
      method: 'GET'
    })
    const coordinates = polygon.data.features[10].geometry.coordinates[0][0]
    const geometryLocs = []
    coordinates.forEach(coordinate => {
      let item = `${coordinate[1]},${coordinate[0]}`
      geometryLocs.push(item)
    })
    res.status(200).json({
      geometry_locs: geometryLocs
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

app.listen(PORT, () => console.log('Server is running on port', PORT))