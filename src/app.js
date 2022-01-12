const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engin and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// index
app.get('', (req, res) =>{
    res.render('index', {
        title: 'Weather App',
        name: 'Josu Lopez'
    })
})

// /about
app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Josu Lopez'
    })
})

// /help
app.get('/help', (req, res) =>{
    res.render('help', {
        message: 'Este mensaje de ayuda es nuevo',
        title: 'Help',
        name: 'Josu Lopez'
    })
})

// app.com/weather
app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'It is snowing', 
        location: 'Arrasate'
    })
})

// Article not found
app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: 'ERROR 404',
        message: 'Article not found'
    })
})

// 404 handler
app.get('*',(req, res) =>{
    res.render('404', {
        title: 'ERROR 404',
        message: 'Page not found'
    })
})

// Put up the server listening in 3000 port
app.listen(3000, () =>{
    console.log('Server is up on port 3000.')
})