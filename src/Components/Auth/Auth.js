import React, {useState} from 'react'
import {connect} from 'react-redux'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import axios from 'axios'
import {getUser} from '../../ducks/authReducer'
import './Auth.css'

const styles = makeStyles({
    inputField:{
        width:'80%',
        marginLeft:'10%',
        marginTop:'10px',
        marginBottom:'10px'
    },
    button:{
        width:'40%',
        marginLeft:'30%',
        marginTop:'10px',
        border:'0.5px solid black',
        borderRadius:'0px',
    }

})

function Auth(props){
    const style = styles()
    const [registered,setRegistered] = useState(true)
    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [confirmPassword,setConfirmPassword] = useState(null)

    function authView(){
        setRegistered(!registered)
    }
    let handleUsername = e => {
        let user = e.target.value
        setUsername(user)
    }
    let handlePassword = e => {
        let pass = e.target.value
        setPassword(pass)
    }
    let handleConfirmPassword = e => {
        let confirmPass = e.target.value
        setConfirmPassword(confirmPass)
    }
    function login(){
        if(username === null){
            return
        }else if(password === null){
            return
        }else{
            axios.post('/api/login',{username,password}).then(res => {
                props.getUser(res.data)
                props.history.push('/profile')
            }).catch(err => {console.log(err)})
        }
    }
    function register(){
        if(username === null){
            return
        }else if(password === null){
            return
        }else if(password !== confirmPassword){
            return
        }else{
            axios.post('/api/register',{username,password}).then(res => {
                props.getUser(res.data)
                props.history.push('/profile')
            }).catch(err => {console.log(err)})
        }
    }
    return(
        <>
        {registered === true?(
        <div className='login'>
            <div className='title'>
                <h1>Login</h1>
            </div>
            <div className='inputHolder'>
                <Input  className={style.inputField} placeholder='Username' onChange={handleUsername}/>
            </div>
            <div className='inputHolder'>
                <Input  className={style.inputField} placeholder='Password' onChange={handlePassword}/>
            </div>
            <Button className={style.button} onClick={login}>Login</Button>
            <div className='textHolder'>
                <p onClick={() => authView()}>Register for an account here</p>
            </div>
        </div>
            ):(
        <div className='login'>
            <div className='title'>
                <h1>Register</h1>
            </div>
            <div className='inputHolder'>
                <Input className={style.inputField} placeholder='Username' onChange={handleUsername}/>
            </div>
            <div className='inputHolder'>
                <Input className={style.inputField} placeholder='Password' onChange={handlePassword}/>
            </div>
            <div>
                <Input className={style.inputField} placeholder='Confirm Password' onChange={handleConfirmPassword}/>
            </div>
            <Button className={style.button} onClick={register}>Create Account</Button>
            <div>
                <p  className='textHolder' onClick={() => authView()}>Login Here</p>
            </div>
        </div>
            )}
        </>
    )
}
const mapStateToProps = reduxState => {
    return{
        reduxState
    }
}
export default connect(mapStateToProps,{getUser})(Auth);

