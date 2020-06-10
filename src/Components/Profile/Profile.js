import React, {useState} from 'react'
import Nav from '../Nav/Nav'
import {connect} from 'react-redux'

function Profile(props){
    console.log(props)
    return(
        <div>
            <h1>Profile</h1>
            <div>
                <p>Username</p>
            </div>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return{
        reduxState
    }
}

export default connect(mapStateToProps)(Profile)