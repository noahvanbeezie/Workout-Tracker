require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env
const authController = require('./controllers/authController')
const wHAController = require('./controllers/weightHeightAgeController')

const app = express()

app.use(express.json())

app.use(
    session({
        resave:false,
        saveUninitialized:false,
        rejectUnauthorized:false,
        cookie:{maxAge: 1000 * 60 * 60},
        secret:SESSION_SECRET
    })
)

massive({
    connectionString: CONNECTION_STRING,
    ssl:{
        rejectUnauthorized:false
    }
}).then(db => {
    const port = SERVER_PORT
    app.set('db', db)
    app.listen(port || 5724, () => console.log(`Connected to ${port}`))
})
// Auth
app.post('/api/login', authController.login)
app.post('/api/register', authController.register)
app.post('/api/logout', authController.logout)
// Profile
app.post('/api/updateprefs', wHAController.updatePrefs)