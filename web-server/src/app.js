const path = require('path')
const express = require('express')
const hbs = require('hbs')

//app.com
//app.com/help
//app.com/about

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views locaiton
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'DJ Abella'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Helpful Text',
        title: 'Help',
        name: 'DJ Abella'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'DJ Abella'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Atlanta'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'About me',
        name: 'DJ Abella',
        errorMessage: 'No further pages in directory'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'About me',
        name: 'DJ Abella',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})