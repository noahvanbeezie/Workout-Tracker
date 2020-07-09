import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Axios from 'axios'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import './Profile.css'

const styles = makeStyles({
    editButton:{
        position:'relative',
        width:'49.9%',
        height:'49.9%',
        top:'-53.958333333333336vw',
        backgroundColor:'Green',
        borderTop:'black solid 2px',
        borderRight:'black solid 2px',
        borderRadius:'0px',
        fontSize:'3.5vw',
        '&:hover':{
            backgroundColor:'Lightgreen'
        } 
        
    }
})

function Profile(props){
    const style = styles()
    const [username,setUsername] = useState(props.reduxState.username)
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
        if(age !== 100){
            setAge(age + 1)
        }
    }
    function adjustAgeDown(){
        if(age !== 18){
            setAge(age - 1)
        }
    }
    let ageInputFieldAge = e => {
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
        if(feet !== 9){
            setFeet(feet + 1 )
        }
    }
    function adjustFeetDown(){
        if(feet !== 4){
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
    let adjustInputFieldWeight = e => {
        if(e.target.value <= 600){
            if(e.target.value >= 50 ){
                setWeight(e.target.value)
            }else{
                setWeight(50)
            }
        }else{
            setWeight(600)
        }
    }

    
    function confirmChanges(){
        Axios.post('/api/updateprefs',{age,weight,feet,inches,username}).then(() => {
            setEdit(false)            
        })

    }

    console.log(props)

    return(
        <div>
            <h1 className='profileHeadText'>Profile</h1>
            {edit === false?(
                <div>
                <p className='username'>Username:{props.reduxState.username}</p>
                <div className='profileHolder'>
                <div className='ageHolder'>
                    {props.reduxState.age ? (
                        <p className='profileText'>Age:{props.reduxState.age}</p>
                    ):(
                        <p className='profileText'>No age associated</p>
                    )}
                </div>
                <div className='heightHolder'>
                    {props.reduxState.feet ? (
                        <p className='profileText'>Height:{props.reduxState.feet}{props.reduxState.inches}</p>
                    ):(
                        <p className='profileText'>No height associated</p>
                    )}
                </div>
                <div className='weightHolder'>
                {props.reduxState.weight ? (
                    <p className='profileText'>Weight:{props.reduxState.weight}</p>
                ):(
                    <p className='profileText'>No weight associated</p>
                )}
                </div>
                <Button className={style.editButton} onClick={() => editView()}>Edit View</Button>
            </div>
            </div>
            ):(
            <div>
            <p className='username'>Username:{props.reduxState.username}</p>
            <div className='profileHolder'>
                <div className='ageHolder'>
                    <p className='profileText'>Age:{age}</p>
                    <div>
                        <button onClick={() => adjustAgeDown()}>Down</button>
                        <Input onChange={ageInputFieldAge}/>
                        <button onClick={() => adjustAgeUp()}>Up</button>
                    </div>
                </div>
                <div className='heightHolder'>
                    <div className='feetHolder'>
                        <p className='profileText'>Feet:{feet}</p>
                        <button onClick={() => adjustFeetDown()}>Down</button>
                        <button onClick={() => adjustFeetUp()}>Up</button>
                    </div>
                    <div className='inchesHolder'>
                        <p className='profileText'>Inches:{inches}</p>
                        <button onClick={() => adjustInchesDown()}>Down</button>
                        <button onClick={() => adjustInchesUp()}>Up</button>
                    </div>
                </div>
                <div className='weightHolder'>
                    <p className='profileText'>Weight:{weight}</p>
                    <Input onChange={adjustInputFieldWeight} placeholder='* Min 50 Max 600 *'/>
                </div>
                <Button className={style.editButton} onClick={() => confirmChanges()}>Confirm Changes</Button>
            </div>
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