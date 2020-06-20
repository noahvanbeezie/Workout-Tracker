module.exports = {
    // Fetch Workout Info on Load
    fetchWorkouts: async (req,res) => {
        const {username} = req.body
        const db = req.app.get('db')
        let data = await db.fetch_workouts(username)
        let workouts = data[0]
        return res.status(200).send(workouts)
            
    },
    // Day 1 Functions
    updateDay1Workout1: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday1workout1(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay1Workout2: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday1workout2(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay1Workout3: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday1workout3(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay1Workout4: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday1workout4(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay1Workout5: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday1workout5(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    // Day 2 Functions
    updateDay2Workout1: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday2workout1(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay2Workout2: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday2workout2(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay2Workout3: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday2workout3(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay2Workout4: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday2workout4(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay2Workout5: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday2workout5(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    // Day 3 Functions
    updateDay3Workout1: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday3workout1(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay3Workout2: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday3workout2(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay3Workout3: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday3workout3(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay3Workout4: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday3workout4(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay3Workout5: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday3workout5(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    // Day 4 Functions
    updateDay4Workout1: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday4workout1(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay4Workout2: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday4workout2(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay4Workout3: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday4workout3(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay4Workout4: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday4workout4(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay4Workout5: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday4workout5(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    // Day 5 Functions
    updateDay5Workout1: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday5workout1(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay5Workout2: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday5workout2(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay5Workout3: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday5workout3(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay5Workout4: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday5workout4(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    updateDay5Workout5: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.workouts.updateday5workout5(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    }
}