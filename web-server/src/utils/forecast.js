const request = require('postman-request');
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c2f10ee8758f8a9c08420e588d554e5c&query=' + latitude + ',' + longitude + '&units=f'

    request({
        url: url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error){
            callback('Could not find coordinates. Enter new coordinates', undefined)
        } else {
            
            callback(undefined, "The weather results for " + body.location.name + ': ' + body.current.weather_descriptions[0] +'.' + ' It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast