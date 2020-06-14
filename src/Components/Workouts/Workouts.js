import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/authReducer'
import './Workouts.css'

function Workouts(props){
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
    let day1Name2 = e =>{
        setWorkoutDay1Name2(e.target.value)
    }
    function day1Reps2Down(){
        if(workoutDay1Reps2 > 1){
            setWorkoutDay1Reps2(workoutDay1Reps2 - 1)
        }
    }
    function day1Reps2Up(){
        if(workoutDay1Reps2 < 30){
            setWorkoutDay1Reps2(workoutDay1Reps2 + 1)
        }
    }
    function day1Sets2Down(){
        if(workoutDay1Sets2 >1){
            setWorkoutDay1Sets2(workoutDay1Sets2 - 1)
        }
    }
    function day1Sets2Up(){
        if(workoutDay1Sets2 < 10){
            setWorkoutDay1Sets2(workoutDay1Sets2 + 1)
        }
    }
    // Workout 3 Day 1
    let day1Name3 = e =>{
        setWorkoutDay1Name3(e.target.value)
    }
    function day1Reps3Down(){
        if(workoutDay1Reps3 > 1){
            setWorkoutDay1Reps3(workoutDay1Reps3 - 1)
        }
    }
    function day1Reps3Up(){
        if(workoutDay1Reps3 < 30){
            setWorkoutDay1Reps3(workoutDay1Reps3 + 1)
        }
    }
    function day1Sets3Down(){
        if(workoutDay1Sets3 >1){
            setWorkoutDay1Sets3(workoutDay1Sets3 - 1)
        }
    }
    function day1Sets3Up(){
        if(workoutDay1Sets3 < 10){
            setWorkoutDay1Sets3(workoutDay1Sets3 + 1)
        }
    }
    // Workout 4 Day 1
    let day1Name4 = e =>{
        setWorkoutDay1Name4(e.target.value)
    }
    function day1Reps4Down(){
        if(workoutDay1Reps4 > 1){
            setWorkoutDay1Reps4(workoutDay1Reps4 - 1)
        }
    }
    function day1Reps4Up(){
        if(workoutDay1Reps4 < 30){
            setWorkoutDay1Reps4(workoutDay1Reps4 + 1)
        }
    }
    function day1Sets4Down(){
        if(workoutDay1Sets4 >1){
            setWorkoutDay1Sets4(workoutDay1Sets4 - 1)
        }
    }
    function day1Sets4Up(){
        if(workoutDay1Sets4 < 10){
            setWorkoutDay1Sets4(workoutDay1Sets4 + 1)
        }
    }
    // Workout 5 Day 1
    let day1Name5 = e =>{
        setWorkoutDay1Name5(e.target.value)
    }
    function day1Reps5Down(){
        if(workoutDay1Reps5 > 1){
            setWorkoutDay1Reps5(workoutDay1Reps5 - 1)
        }
    }
    function day1Reps5Up(){
        if(workoutDay1Reps5 < 30){
            setWorkoutDay1Reps5(workoutDay1Reps5 + 1)
        }
    }
    function day1Sets5Down(){
        if(workoutDay1Sets5 >1){
            setWorkoutDay1Sets5(workoutDay1Sets5 - 1)
        }
    }
    function day1Sets5Up(){
        if(workoutDay1Sets5 < 10){
            setWorkoutDay1Sets5(workoutDay1Sets5 + 1)
        }
    }
    

    return(
        <div>
            <h1>Workouts</h1>
            <p>Username:{props.reduxState.username}</p>
            <div className='workoutHolder'>
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
                <div>
                    <div>
                        {workoutDay1Name2 === '' ? (
                            <h3>Workout 2:</h3>
                        ):(
                            <h3>{workoutDay1Name2}</h3>
                        )}
                    <input
                        type='text' 
                        maxLength={30} 
                        onChange={day1Name2}/>
                    </div>
                    <div>
                        <p>Reps:{workoutDay1Reps2}</p>
                        <div>
                            <Button onClick={() => day1Reps2Down()}>{'<<<'}</Button>
                            <Button onClick={() => day1Reps2Up()}>{'>>>'}</Button>
                        </div>
                    </div>
                    <div>
                        <p>Sets:{workoutDay1Sets2}</p>
                        <div>
                            <Button onClick={() => day1Sets2Down()}>{'<<<'}</Button>
                            <Button onClick={() => day1Sets2Up()}>{'>>>'}</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        {workoutDay1Name3 === '' ? (
                            <h3>Workout 3:</h3>
                        ):(
                            <h3>{workoutDay1Name3}</h3>
                        )}
                    <input
                        type='text' 
                        maxLength={30} 
                        onChange={day1Name3}/>
                    </div>
                    <div>
                        <p>Reps:{workoutDay1Reps3}</p>
                        <div>
                            <Button onClick={() => day1Reps3Down()}>{'<<<'}</Button>
                            <Button onClick={() => day1Reps3Up()}>{'>>>'}</Button>
                        </div>
                    </div>
                    <div>
                        <p>Sets:{workoutDay1Sets3}</p>
                        <div>
                            <Button onClick={() => day1Sets3Down()}>{'<<<'}</Button>
                            <Button onClick={() => day1Sets3Up()}>{'>>>'}</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        {workoutDay1Name4 === '' ? (
                            <h3>Workout 4:</h3>
                        ):(
                            <h3>{workoutDay1Name4}</h3>
                        )}
                    <input
                        type='text' 
                        maxLength={30} 
                        onChange={day1Name4}/>
                    </div>
                    <div>
                        <p>Reps:{workoutDay1Reps4}</p>
                        <div>
                            <Button onClick={() => day1Reps4Down()}>{'<<<'}</Button>
                            <Button onClick={() => day1Reps4Up()}>{'>>>'}</Button>
                        </div>
                    </div>
                    <div>
                        <p>Sets:{workoutDay1Sets4}</p>
                        <div>
                            <Button onClick={() => day1Sets4Down()}>{'<<<'}</Button>
                            <Button onClick={() => day1Sets4Up()}>{'>>>'}</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        {workoutDay1Name5 === '' ? (
                            <h3>Workout 5:</h3>
                        ):(
                            <h3>{workoutDay1Name5}</h3>
                        )}
                    <input
                        type='text' 
                        maxLength={30} 
                        onChange={day1Name5}/>
                    </div>
                    <div>
                        <p>Reps:{workoutDay1Reps5}</p>
                        <div>
                            <Button onClick={() => day1Reps5Down()}>{'<<<'}</Button>
                            <Button onClick={() => day1Reps5Up()}>{'>>>'}</Button>
                        </div>
                    </div>
                    <div>
                        <p>Sets:{workoutDay1Sets5}</p>
                        <div>
                            <Button onClick={() => day1Sets5Down()}>{'<<<'}</Button>
                            <Button onClick={() => day1Sets5Up()}>{'>>>'}</Button>
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