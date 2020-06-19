module.exports = {
    // Day 1 Functions
    updateDay1Workout1: (req,res) => {
        const {username,name,reps,sets} = req.body
        const db = req.app.get('db')
        db.updateday1workout1(name,reps,sets,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    },
    
}