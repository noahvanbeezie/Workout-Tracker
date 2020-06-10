import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'

function Profile(props){
    const [edit,setEdit] = useState(false)
    const [age,setAge] = useState(null)
    const [feet,setFeet] = useState(null)
    const [inches,setInches] = useState(null)

    function editView(){
        setEdit(!edit)
        setAge(props.reduxState.age)
        if(props.reduxState.feet === null){
            setFeet(5)

        }else{
            setFeet(props.reduxState.feet)
        }
        if(props.reduxState.inches === null){
            setInches(0)
        }else{
            setInches(props.reduxState.inches)
        }
    }

    function adjustFeetUp(){
        if(feet != 9){
            setFeet(feet + 1 )
        }
    }
    function adjustFeetDown(){
        if(feet != 4){
            setFeet(feet - 1 )
        }
    }
    function adjustInchesUp(){
        if(inches === 11){
            if(feet !== 9){
                setFeet(feet + 1)
                setInches(0)
            }
        }else{
            setInches(inches + 1)
        }
    }
    function adjustInchesDown(){
        if(inches === 0){
            if(feet !==4){
                setFeet(feet + 1 )
                setInches(11)
            }
        }else{
            setInches(inches - 1)
        }
    }

    console.log(props)

    return(
        <div>
            <h1>Profile</h1>
            {edit === false?(
            <div>
                <p>Username:{props.reduxState.username}</p>
                <p>Age:{props.reduxState.age}</p>
                <p>Height:{props.reduxState.feet}{props.reduxState.inches}</p>
                <p onClick={() => editView()}>Edit</p>
                <p>Normal View</p>
            </div>
            ):(
            <div>
                <p>Username:{props.reduxState.username}</p>
                <div>
                    <p>Age:{props.reduxState.age}</p>
                </div>
                <div>
                    <p>Feet:{feet}</p>
                    <button onClick={() => adjustFeetDown()}>Down</button>
                    <button onClick={() => adjustFeetUp()}>Up</button>
                </div>
                <div>
                    <p>Inches:{inches}</p>
                    <button onClick={() => adjustInchesDown()}>Down</button>
                    <button onClick={() => adjustInchesUp()}>Up</button>
                </div>
                <p onClick={() => editView()}>Edit</p>
                <p>Edit Mode</p>
            </div>
            )}
        </div>
    )
}

const mapStateToProps = reduxState => {
    return{
        reduxState
    }
}

export default connect(mapStateToProps)(Profile)