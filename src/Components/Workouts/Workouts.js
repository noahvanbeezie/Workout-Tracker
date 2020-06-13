import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/authReducer'

function Workouts(props){
    const [update,setUpdate] = useState(false)

    const [workoutDay1Name1,setWorkoutDay1Name1] = useState('')
    const [workoutDay1Reps1,setWorkoutDay1Reps1] = useState(1)
    const [workoutDay1Sets1,setWorkoutDay1Sets1] = useState(1)
    const [workoutDay1Name2,setWorkoutDay1Name2] = useState('')
    const [workoutDay1Reps2,setWorkoutDay1Reps2] = useState(1)
    const [workoutDay1Sets2,setWorkoutDay1Sets2] = useState(1)
    const [workoutDay1Name3,setWorkoutDay1Name3] = useState('')
    const [workoutDay1Reps3,setWorkoutDay1Reps3] = useState(1)
    const [workoutDay1Sets3,setWorkoutDay1Sets3] = useState(1)
    const [workoutDay1Name4,setWorkoutDay1Name4] = useState('')
    const [workoutDay1Reps4,setWorkoutDay1Reps4] = useState(1)
    const [workoutDay1Sets4,setWorkoutDay1Sets4] = useState(1)
    const [workoutDay1Name5,setWorkoutDay1Name5] = useState('')
    const [workoutDay1Reps5,setWorkoutDay1Reps5] = useState(1)
    const [workoutDay1Sets5,setWorkoutDay1Sets5] = useState(1)

    useEffect(() => {
        if(update === true){
            setUpdate(false)
        }
    },{update})
    // Workout 1 Day 1
    let day1Name1 = e =>{
        setWorkoutDay1Name1(e.target.value)
    }
    function day1Reps1Down(){
        if(workoutDay1Reps1 > 1){
            setWorkoutDay1Reps1(workoutDay1Reps1 - 1)
        }
    }
    function day1Reps1Up(){
        if(workoutDay1Reps1 < 30){
            setWorkoutDay1Reps1(workoutDay1Reps1 + 1)
        }
    }
    function day1Sets1Down(){
        if(workoutDay1Sets1 >1){
            setWorkoutDay1Sets1(workoutDay1Sets1 - 1)
        }
    }
    function day1Sets1Up(){
        if(workoutDay1Sets1 < 10){
            setWorkoutDay1Sets1(workoutDay1Sets1 + 1)
        }
    }
    // Workout 2 Day 1

    return(
        <div>
            <h1>Workouts</h1>
            <p>Username:{props.reduxState.username}</p>
            <div>
                <h2>Day 1:</h2>
                <div>
                    <div>
                        {workoutDay1Name1 === '' ? (
                            <h3>Workout 1:</h3>
                        ):(
                            <h3>{workoutDay1Name1}</h3>
                        )}
                    <input
                        type='text' 
                        maxLength={30} 
                        onChange={day1Name1}/>
                    </div>
                    <div>
                        <p>Reps:{workoutDay1Reps1}</p>
                        <div>
                            <Button onClick={() => day1Reps1Down()}>{'<<<'}</Button>
                            <Button onClick={() => day1Reps1Up()}>{'>>>'}</Button>
                        </div>
                    </div>
                    <div>
                        <p>Sets:{workoutDay1Sets1}</p>
                        <div>
                            <Button onClick={() => day1Sets1Down()}>{'<<<'}</Button>
                            <Button onClick={() => day1Sets1Up()}>{'>>>'}</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
const mapStateToProps = reduxState => {
    return{
        reduxState
    }
}
export default connect(mapStateToProps,{getUser})(Workouts);