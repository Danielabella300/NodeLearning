const path = require('path')
const express = require('express')
//app.com
//app.com/help
//app.com/about

const app = express()
const user = {
    title: 'Weather app',
    name: 'dj abella,'
}
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

//Setup handlebars engine and views locaiton
app.set('views', viewsPath)
app.set('view engine', 'hbs')

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', user)
})

app.get('/help', (req, res) =>
{
    res.render('help', user)
})

app.get('/about', (req,res) =>
{
    res.render('about', user)
})

app.get('/weather', (req, res) => {
    res.send({
        Forecast: 'string',
        location: 'string'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})