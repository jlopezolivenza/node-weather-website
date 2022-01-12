const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
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
        message: 'Este mensaje de ayuda es nuevo'
    })
})


// app.com/weather
app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'It is snowing', 
        location: 'Arrasate'
    })
})

app.listen(3000, () =>{
    console.log('Server is up on port 3000.')
})