import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'

function Nav(props){
    function profilePush(){
        props.history.push('/profile')
    }
    function workoutsPush(){
        props.history.push('/workouts')
    }
    
    return(
        <div>
            <h1>Nav</h1>
            <Button onClick={() => profilePush()}>Profile</Button>
            <Button onClick={() => workoutsPush()}>Workouts</Button>
          
        </div>
)
}
export default connect()(Nav)