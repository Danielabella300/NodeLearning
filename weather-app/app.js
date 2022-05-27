const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const process = require('process');

const argLocation = process.argv[2];
if (!argLocation || argLocation.length <= 2) {
    console.log('Provide a legitimate ADDRESS!! greater than 3')
} else {
    geocode(argLocation, (error, data) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.latitude)
        console.log(data.longitude)

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
}