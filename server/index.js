require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env
const authController = require('./controllers/authController')
const wHAController = require('./controllers/weightHeightAgeController')
const workoutController = require('./controllers/workoutController')

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
// 
// ENDPOINTS
// Auth
app.post('/api/login', authController.login)
app.post('/api/register', authController.register)
app.post('/api/logout', authController.logout)
// Profile
app.post('/api/updateprefs', wHAController.updatePrefs)
// Workouts Day 1
app.post('/api/workout1day1', workoutController.updateDay1Workout1)
app.post('/api/workout2day1', workoutController.updateDay1Workout2)
app.post('/api/workout3day1', workoutController.updateDay1Workout3)
app.post('/api/workout4day1', workoutController.updateDay1Workout4)
app.post('/api/workout5day1', workoutController.updateDay1Workout5)
// Workouts Day 2
app.post('/api/workout1day2', workoutController.updateDay2Workout1)
app.post('/api/workout2day2', workoutController.updateDay2Workout2)
app.post('/api/workout3day2', workoutController.updateDay2Workout3)
app.post('/api/workout4day2', workoutController.updateDay2Workout4)
app.post('/api/workout5day2', workoutController.updateDay2Workout5)
// Workouts Day 3
app.post('/api/workout1day3', workoutController.updateDay3Workout1)
app.post('/api/workout2day3', workoutController.updateDay3Workout2)
app.post('/api/workout3day3', workoutController.updateDay3Workout3)
app.post('/api/workout4day3', workoutController.updateDay3Workout4)
app.post('/api/workout5day3', workoutController.updateDay3Workout5)
// Workouts Day 4
app.post('/api/workout1day4', workoutController.updateDay4Workout1)
app.post('/api/workout2day4', workoutController.updateDay4Workout2)
app.post('/api/workout3day4', workoutController.updateDay4Workout3)
app.post('/api/workout4day4', workoutController.updateDay4Workout4)
app.post('/api/workout5day4', workoutController.updateDay4Workout5)
// Workouts Day 5
app.post('/api/workout1day5', workoutController.updateDay5Workout1)
app.post('/api/workout2day5', workoutController.updateDay5Workout2)
app.post('/api/workout3day5', workoutController.updateDay5Workout3)
app.post('/api/workout4day5', workoutController.updateDay5Workout4)
app.post('/api/workout5day5', workoutController.updateDay5Workout5)