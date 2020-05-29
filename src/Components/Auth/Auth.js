import React, {useState} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

function Auth(props){
    const [registered,setRegistered] = useState(true)

    function authView(){
        setRegistered(!registered)
    }
    return(
        <>
        {registered === true?(
        <div>
            <h1>Login</h1>
            <Input placeholder='Username'/>
            <Input placeholder='Password'/>
            <Button>Login</Button>
            <p onClick={() => authView()}>Register for an account here</p>
        </div>
            ):(
        <div>
            <h1>Register</h1>
            <Input placeholder='Username'/>
            <Input placeholder='Password'/>
            <Input placeholder='Confirm Password'/>
            <Button>Create Account</Button>
            <p onClick={() => authView()}>Login Here</p>
        </div>
            )}
        </>
    )
}

export default connect()(Auth);

