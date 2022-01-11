const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// app.com/help
app.get('/help', (req, res)=>{
    res.send([{
        name: 'Josu',
        age: 27
    },{
        name: 'Alba',
        age: 26
    }])
})

// app.com/about
app.get('/about', (req, res)=>{
    res.send('<h1>About</h1>')
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