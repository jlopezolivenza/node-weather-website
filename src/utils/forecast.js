const request = require('postman-request')





const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=57ab958cca1092f56509052f2a6b350b&query=' + latitude + ',' + longitude +'&units=f'
    request({url: url, json: true}, (error, response)=>{
        if (error){
            callback('Unable to access to forecast services.', undefined)
        }
        else if (response.body.error){
            callback('Unable to search the location. Please try with other place.', undefined)
        }
        else{
            callback(undefined, 
            response.body.current.weather_descriptions[0] + ". The temperature is " + response.body.current.temperature + " degrees out and it feels like " + response.body.current.feelslike + " degrees."+
            "The humidity is " + response.body.current.humidity )
        }
    })
}

module.exports = forecast