const request = require('postman-request')

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieW9zdTMzIiwiYSI6ImNreWN0OXZzZjBzamgydnA4Z3ZybnZvZHkifQ.a-bnQFKIIbjmOJ4J00V-MQ&limit=1'
    request({url: url, json: true}, (error, response)=>{
        if (error){
            callback('Unable to reach location services')
        } else if (response.body.features.length === 0){
            callback('Unable to find the location. Please try another search.')
        }
        else{
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode