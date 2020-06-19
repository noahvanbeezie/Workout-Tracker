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
        db.updateday1workout1(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    
}