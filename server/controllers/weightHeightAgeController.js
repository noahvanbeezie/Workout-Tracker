module.exports = {
    updatePrefs:(req,res) => {
        const db = req.app.get('db')
        const {age,weight,feet,inches,username} = req.body
        db.weight_height_age(age,weight,feet,inches,username).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err) )
    },
}