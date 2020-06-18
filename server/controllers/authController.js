const bcrypt = require('bcryptjs')

module.exports={
    login: async (req,res) => {
        const {username,password} = req.body
        const {session} = req
        const db = req.app.get('db')
        let usernameCheck = await db.check_username([username])
        let user=usernameCheck[0]
        if(!user){
            return res.status(404).send('Username not found')
        }
        const passwordCheck = bcrypt.compareSync(password,user.password)
        if(passwordCheck === true){
            delete user.password
            session.user = user
            res.status(200).send(session.user)
        }else{
            res.status(500).send('Incorrect Password')
        }
    },
    register: async (req,res) => {
        const {username,password} = req.body
        const {session} = req
        const db = req.app.get('db')
        const usernameCheck = db.check_username([username])
        let existingUser = usernameCheck[0]
        if(existingUser){
            res.status(500).send('Username already in use.')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)

        let user = await db.register({username,hash})
        session.user = user
        db.registerWorkoutTable(username)
        res.status(200).send(session.user)
    },
    logout:(req,res) => {
        req.session.destroy
        res.sendStatus(200)
    }
}