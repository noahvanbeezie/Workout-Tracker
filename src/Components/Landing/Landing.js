import React, {useState} from 'react'
import {connect} from 'react-redux'

function Landing(props){
    console.log(props)
    return(
        <>
        <h1>Gruff</h1>
        </>
    )
}

const mapStateToProps = reduxState => {
    return{
        reduxState
    }
}

export default connect(mapStateToProps)(Landing)