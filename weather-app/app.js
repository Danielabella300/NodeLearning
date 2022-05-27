const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const process = require('process');

const argLocation = process.argv[2];
if (!argLocation || argLocation.length <= 2) {
    console.log('Provide a legitimate ADDRESS!! greater than 3')
} else {
    geocode(argLocation, (error, {latitude, longitude, location} = {})  => {
        if (error) {
            return console.log(error)
        }
        console.log(latitude)
        console.log(longitude)

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}