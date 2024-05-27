const axios = require('axios')
require('dotenv').config()

googleAPI = process.env.googleAPI
timeAPi = process.env.timeAPi
const getDepartureTime = async(req, res)=>{
    const {lat, lon, address} = req.query
    let location
    if(address){
        const geoResponse = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleAPI}`)
        location = geoResponse.data.results[0].geometry.location
    } else if (lat && lon){
        location = {lat, lon};
    }

    const response = await axios.get(`https://api.511.org/transit/departure?api_key=${timeAPI}&lat=${location.lat}&lon=${location.lon}`)
    res.status(200).json(response.data)
}

module.exports = getDepartureTime