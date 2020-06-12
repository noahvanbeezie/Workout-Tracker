import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import {connect} from 'react-redux'

function Profile(props){
    const [edit,setEdit] = useState(false)
    const [age,setAge] = useState(null)
    const [feet,setFeet] = useState(null)
    const [inches,setInches] = useState(null)
    const [weight,setWeight] = useState(null)

    function editView(){
        setEdit(!edit)
        if(props.reduxState.age){
            setAge(props.reduxState.age)
        }else{
            setAge(18)
        }
        if(props.reduxState.feet){
            setFeet(props.reduxState.feet)
        }else{
            setFeet(5)
        }
        if(props.reduxState.inches){
            setInches(props.reduxState.inches)
        }else{
            setInches(0)
        }
        if(props.reduxState.weight){
            setWeight(props.reduxState.weight)
        }else{
            setWeight(150)
        }
    }
    function adjustAgeUp(){
        if(age != 100){
            setAge(age + 1)
        }
    }
    function adjustAgeDown(){
        if(age != 18){
            setAge(age - 1)
        }
    }
    let ageInputField = e => {
        if(e.target.value <= 100){
            if(e.target.value >= 18){
                setAge(e.target.value)
            }else{
                setAge(18)
            }
        }else{
            setAge(100)
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
                {props.reduxState.weight ? (
                    <p>Weight:{props.reduxState.weight}</p>
                ):(
                    <p>No weight associated</p>
                )}
                <p onClick={() => editView()}>Edit</p>
            </div>
            ):(
            <div>
                <p>Username:{props.reduxState.username}</p>
                <div>
                    <p>Age:{age}</p>
                    <div>
                        <button onClick={() => adjustAgeDown()}>Down</button>
                        <Input onChange={ageInputField}/>
                        <button onClick={() => adjustAgeUp()}>Up</button>
                    </div>
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
                <div>
                    <p>Weight:</p>
                    <Input/>
                </div>
                <p onClick={() => editView()}>Edit</p>
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