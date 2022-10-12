import path from 'path'
import { fileURLToPath } from 'url'
import express from "express"
import { forecast } from '../utils/forecast.js';
import { geocode } from '../utils/geocode.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather App',
        name: 'bob'
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error: 'pls send an address'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        forecast(latitude, longitude, (error, forecastdata) => {
        res.send({
            forecast : forecastdata,
            location,
            address : req.query.address
        })
        })
    })


})







app.listen(3000, () => {
    console.log('server is up on 3000')
})