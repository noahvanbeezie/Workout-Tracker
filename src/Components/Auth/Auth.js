import React, {useState} from 'react'
import {connect} from 'react-redux'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import axios from 'axios'

function Auth(props){
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

            }).catch(err => {console.log(err)})
        }
    }
    return(
        <>
        {registered === true?(
        <div>
            <h1>Login</h1>
            <Input placeholder='Username' onChange={handleUsername}/>
            <Input placeholder='Password' onChange={handlePassword}/>
            <Button onClick={login}>Login</Button>
            <p onClick={() => authView()}>Register for an account here</p>
        </div>
            ):(
        <div>
            <h1>Register</h1>
            <Input placeholder='Username' onChange={handleUsername}/>
            <Input placeholder='Password' onChange={handlePassword}/>
            <Input placeholder='Confirm Password' onChange={handleConfirmPassword}/>
            <Button onClick={register}>Create Account</Button>
            <p onClick={() => authView()}>Login Here</p>
        </div>
            )}
        </>
    )
}

export default connect()(Auth);

