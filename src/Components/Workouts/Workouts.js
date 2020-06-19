import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/authReducer'
import {makeStyles} from '@material-ui/core/styles'
import Axios from 'axios'

import './Workouts.css'

const styles = makeStyles({
    downButton:{
        border:'0.5px solid black',
        backgroundColor:'#dd2c00',
        '&:hover':{
            backgroundColor:'#bf360c'
        } 
    },
    upButton:{
        position:'relative',
        right:'-25px',
        border:'0.5px solid black',
        backgroundColor:'#dd2c00',
        '&:hover':{
            backgroundColor:'#bf360c'
        } 
    },
    button:{
        width:'100%',
        marginTop:'10px',
        backgroundColor:'#dd2c00',
        borderRadius:'0px',
        borderTop:'1px solid black',
        borderBottom:'1px solid black',
        '&:hover':{
            backgroundColor:'#bf360c'
        } 
    }

})


function Workouts(props){
    const style = styles();
    const username = props.reduxState.username
    // Day 1 vars
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
    const [workout1Day1Edit,setWorkout1Day1Edit] = useState(false)
    const [workout2Day1Edit,setWorkout2Day1Edit] = useState(false)
    const [workout3Day1Edit,setWorkout3Day1Edit] = useState(false)
    const [workout4Day1Edit,setWorkout4Day1Edit] = useState(false)
    const [workout5Day1Edit,setWorkout5Day1Edit] = useState(false)
    // Day 2 vars
    const [workoutDay2Name1,setWorkoutDay2Name1] = useState('')
    const [workoutDay2Reps1,setWorkoutDay2Reps1] = useState(1)
    const [workoutDay2Sets1,setWorkoutDay2Sets1] = useState(1)
    const [workoutDay2Name2,setWorkoutDay2Name2] = useState('')
    const [workoutDay2Reps2,setWorkoutDay2Reps2] = useState(1)
    const [workoutDay2Sets2,setWorkoutDay2Sets2] = useState(1)
    const [workoutDay2Name3,setWorkoutDay2Name3] = useState('')
    const [workoutDay2Reps3,setWorkoutDay2Reps3] = useState(1)
    const [workoutDay2Sets3,setWorkoutDay2Sets3] = useState(1)
    const [workoutDay2Name4,setWorkoutDay2Name4] = useState('')
    const [workoutDay2Reps4,setWorkoutDay2Reps4] = useState(1)
    const [workoutDay2Sets4,setWorkoutDay2Sets4] = useState(1)
    const [workoutDay2Name5,setWorkoutDay2Name5] = useState('')
    const [workoutDay2Reps5,setWorkoutDay2Reps5] = useState(1)
    const [workoutDay2Sets5,setWorkoutDay2Sets5] = useState(1)
    const [workout1Day2Edit,setWorkout1Day2Edit] = useState(false)
    const [workout2Day2Edit,setWorkout2Day2Edit] = useState(false)
    const [workout3Day2Edit,setWorkout3Day2Edit] = useState(false)
    const [workout4Day2Edit,setWorkout4Day2Edit] = useState(false)
    const [workout5Day2Edit,setWorkout5Day2Edit] = useState(false)
    // Day 3 vars
    const [workoutDay3Name1,setWorkoutDay3Name1] = useState('')
    const [workoutDay3Reps1,setWorkoutDay3Reps1] = useState(1)
    const [workoutDay3Sets1,setWorkoutDay3Sets1] = useState(1)
    const [workoutDay3Name2,setWorkoutDay3Name2] = useState('')
    const [workoutDay3Reps2,setWorkoutDay3Reps2] = useState(1)
    const [workoutDay3Sets2,setWorkoutDay3Sets2] = useState(1)
    const [workoutDay3Name3,setWorkoutDay3Name3] = useState('')
    const [workoutDay3Reps3,setWorkoutDay3Reps3] = useState(1)
    const [workoutDay3Sets3,setWorkoutDay3Sets3] = useState(1)
    const [workoutDay3Name4,setWorkoutDay3Name4] = useState('')
    const [workoutDay3Reps4,setWorkoutDay3Reps4] = useState(1)
    const [workoutDay3Sets4,setWorkoutDay3Sets4] = useState(1)
    const [workoutDay3Name5,setWorkoutDay3Name5] = useState('')
    const [workoutDay3Reps5,setWorkoutDay3Reps5] = useState(1)
    const [workoutDay3Sets5,setWorkoutDay3Sets5] = useState(1)
    const [workout1Day3Edit,setWorkout1Day3Edit] = useState(false)
    const [workout2Day3Edit,setWorkout2Day3Edit] = useState(false)
    const [workout3Day3Edit,setWorkout3Day3Edit] = useState(false)
    const [workout4Day3Edit,setWorkout4Day3Edit] = useState(false)
    const [workout5Day3Edit,setWorkout5Day3Edit] = useState(false)
    // Day 4 vars
    const [workoutDay4Name1,setWorkoutDay4Name1] = useState('')
    const [workoutDay4Reps1,setWorkoutDay4Reps1] = useState(1)
    const [workoutDay4Sets1,setWorkoutDay4Sets1] = useState(1)
    const [workoutDay4Name2,setWorkoutDay4Name2] = useState('')
    const [workoutDay4Reps2,setWorkoutDay4Reps2] = useState(1)
    const [workoutDay4Sets2,setWorkoutDay4Sets2] = useState(1)
    const [workoutDay4Name3,setWorkoutDay4Name3] = useState('')
    const [workoutDay4Reps3,setWorkoutDay4Reps3] = useState(1)
    const [workoutDay4Sets3,setWorkoutDay4Sets3] = useState(1)
    const [workoutDay4Name4,setWorkoutDay4Name4] = useState('')
    const [workoutDay4Reps4,setWorkoutDay4Reps4] = useState(1)
    const [workoutDay4Sets4,setWorkoutDay4Sets4] = useState(1)
    const [workoutDay4Name5,setWorkoutDay4Name5] = useState('')
    const [workoutDay4Reps5,setWorkoutDay4Reps5] = useState(1)
    const [workoutDay4Sets5,setWorkoutDay4Sets5] = useState(1)
    const [workout1Day4Edit,setWorkout1Day4Edit] = useState(false)
    const [workout2Day4Edit,setWorkout2Day4Edit] = useState(false)
    const [workout3Day4Edit,setWorkout3Day4Edit] = useState(false)
    const [workout4Day4Edit,setWorkout4Day4Edit] = useState(false)
    const [workout5Day4Edit,setWorkout5Day4Edit] = useState(false)
    // Day 5 vars
    const [workoutDay5Name1,setWorkoutDay5Name1] = useState('')
    const [workoutDay5Reps1,setWorkoutDay5Reps1] = useState(1)
    const [workoutDay5Sets1,setWorkoutDay5Sets1] = useState(1)
    const [workoutDay5Name2,setWorkoutDay5Name2] = useState('')
    const [workoutDay5Reps2,setWorkoutDay5Reps2] = useState(1)
    const [workoutDay5Sets2,setWorkoutDay5Sets2] = useState(1)
    const [workoutDay5Name3,setWorkoutDay5Name3] = useState('')
    const [workoutDay5Reps3,setWorkoutDay5Reps3] = useState(1)
    const [workoutDay5Sets3,setWorkoutDay5Sets3] = useState(1)
    const [workoutDay5Name4,setWorkoutDay5Name4] = useState('')
    const [workoutDay5Reps4,setWorkoutDay5Reps4] = useState(1)
    const [workoutDay5Sets4,setWorkoutDay5Sets4] = useState(1)
    const [workoutDay5Name5,setWorkoutDay5Name5] = useState('')
    const [workoutDay5Reps5,setWorkoutDay5Reps5] = useState(1)
    const [workoutDay5Sets5,setWorkoutDay5Sets5] = useState(1)
    const [workout1Day5Edit,setWorkout1Day5Edit] = useState(false)
    const [workout2Day5Edit,setWorkout2Day5Edit] = useState(false)
    const [workout3Day5Edit,setWorkout3Day5Edit] = useState(false)
    const [workout4Day5Edit,setWorkout4Day5Edit] = useState(false)
    const [workout5Day5Edit,setWorkout5Day5Edit] = useState(false)

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
    function updateDay1Workout1(){
        let name = workoutDay1Name1
        let reps = workoutDay1Reps1
        let sets = workoutDay1Sets1
        Axios.post('/api/workout1day1',{username,name,reps,sets}).then(() => {
            setWorkout1Day1Edit(false)
        })
    }
    function editDay1Workout1(){
        setWorkout1Day1Edit(true)
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
    function editDay1Workout2(){
        setWorkout2Day1Edit(true)
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
    function editDay1Workout3(){
        setWorkout3Day1Edit(true)
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
    function editDay1Workout4(){
        setWorkout4Day1Edit(true)
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
    function editDay1Workout5(){
        setWorkout5Day1Edit(true)
    }
    // 
    // Workout 1 Day 2
    // 
    let day2Name1 = e =>{
        setWorkoutDay2Name1(e.target.value)
    }
    function day2Reps1Down(){
        if(workoutDay2Reps1 > 1){
            setWorkoutDay2Reps1(workoutDay2Reps1 - 1)
        }
    }
    function day2Reps1Up(){
        if(workoutDay2Reps1 < 30){
            setWorkoutDay2Reps1(workoutDay2Reps1 + 1)
        }
    }
    function day2Sets1Down(){
        if(workoutDay2Sets1 >1){
            setWorkoutDay2Sets1(workoutDay2Sets1 - 1)
        }
    }
    function day2Sets1Up(){
        if(workoutDay2Sets1 < 10){
            setWorkoutDay2Sets1(workoutDay2Sets1 + 1)
        }
    }
    function editDay2Workout1(){
        setWorkout1Day2Edit(true)
    }
    // Workout 2 Day 2
    let day2Name2 = e =>{
        setWorkoutDay2Name2(e.target.value)
    }
    function day2Reps2Down(){
        if(workoutDay2Reps2 > 1){
            setWorkoutDay2Reps2(workoutDay2Reps2 - 1)
        }
    }
    function day2Reps2Up(){
        if(workoutDay2Reps2 < 30){
            setWorkoutDay2Reps2(workoutDay2Reps2 + 1)
        }
    }
    function day2Sets2Down(){
        if(workoutDay2Sets2 >1){
            setWorkoutDay2Sets2(workoutDay2Sets2 - 1)
        }
    }
    function day2Sets2Up(){
        if(workoutDay2Sets2 < 10){
            setWorkoutDay2Sets2(workoutDay2Sets2 + 1)
        }
    }
    function editDay2Workout2(){
        setWorkout2Day2Edit(true)
    }
    // Workout 3 Day 2
    let day2Name3 = e =>{
        setWorkoutDay2Name3(e.target.value)
    }
    function day2Reps3Down(){
        if(workoutDay2Reps3 > 1){
            setWorkoutDay2Reps3(workoutDay2Reps3 - 1)
        }
    }
    function day2Reps3Up(){
        if(workoutDay2Reps3 < 30){
            setWorkoutDay2Reps3(workoutDay2Reps3 + 1)
        }
    }
    function day2Sets3Down(){
        if(workoutDay2Sets3 >1){
            setWorkoutDay2Sets3(workoutDay2Sets3 - 1)
        }
    }
    function day2Sets3Up(){
        if(workoutDay2Sets3 < 10){
            setWorkoutDay2Sets3(workoutDay2Sets3 + 1)
        }
    }
    function editDay2Workout3(){
        setWorkout3Day2Edit(true)
    }
    // Workout 4 Day 2
    let day2Name4 = e =>{
        setWorkoutDay2Name4(e.target.value)
    }
    function day2Reps4Down(){
        if(workoutDay2Reps4 > 1){
            setWorkoutDay2Reps4(workoutDay2Reps4 - 1)
        }
    }
    function day2Reps4Up(){
        if(workoutDay2Reps4 < 30){
            setWorkoutDay2Reps4(workoutDay2Reps4 + 1)
        }
    }
    function day2Sets4Down(){
        if(workoutDay2Sets4 >1){
            setWorkoutDay2Sets4(workoutDay2Sets4 - 1)
        }
    }
    function day2Sets4Up(){
        if(workoutDay2Sets4 < 10){
            setWorkoutDay2Sets4(workoutDay2Sets4 + 1)
        }
    }
    function editDay2Workout4(){
        setWorkout4Day2Edit(true)
    }
    // Workout 5 Day 2
    let day2Name5 = e =>{
        setWorkoutDay2Name5(e.target.value)
    }
    function day2Reps5Down(){
        if(workoutDay2Reps5 > 1){
            setWorkoutDay2Reps5(workoutDay2Reps5 - 1)
        }
    }
    function day2Reps5Up(){
        if(workoutDay2Reps5 < 30){
            setWorkoutDay2Reps5(workoutDay2Reps5 + 1)
        }
    }
    function day2Sets5Down(){
        if(workoutDay2Sets5 >1){
            setWorkoutDay2Sets5(workoutDay2Sets5 - 1)
        }
    }
    function day2Sets5Up(){
        if(workoutDay2Sets5 < 10){
            setWorkoutDay2Sets5(workoutDay2Sets5 + 1)
        }
    }
    function editDay2Workout5(){
        setWorkout5Day2Edit(true)
    }
    // 
    // Workout 1 Day 3
    // 
    let day3Name1 = e =>{
        setWorkoutDay3Name1(e.target.value)
    }
    function day3Reps1Down(){
        if(workoutDay3Reps1 > 1){
            setWorkoutDay3Reps1(workoutDay3Reps1 - 1)
        }
    }
    function day3Reps1Up(){
        if(workoutDay3Reps1 < 30){
            setWorkoutDay3Reps1(workoutDay3Reps1 + 1)
        }
    }
    function day3Sets1Down(){
        if(workoutDay3Sets1 >1){
            setWorkoutDay3Sets1(workoutDay3Sets1 - 1)
        }
    }
    function day3Sets1Up(){
        if(workoutDay3Sets1 < 10){
            setWorkoutDay3Sets1(workoutDay3Sets1 + 1)
        }
    }
    function editDay3Workout1(){
        setWorkout1Day3Edit(true)
    }
    // Workout 2 Day 3
    let day3Name2 = e =>{
        setWorkoutDay3Name2(e.target.value)
    }
    function day3Reps2Down(){
        if(workoutDay3Reps2 > 1){
            setWorkoutDay3Reps2(workoutDay3Reps2 - 1)
        }
    }
    function day3Reps2Up(){
        if(workoutDay3Reps2 < 30){
            setWorkoutDay3Reps2(workoutDay3Reps2 + 1)
        }
    }
    function day3Sets2Down(){
        if(workoutDay3Sets2 >1){
            setWorkoutDay3Sets2(workoutDay3Sets2 - 1)
        }
    }
    function day3Sets2Up(){
        if(workoutDay3Sets2 < 10){
            setWorkoutDay3Sets2(workoutDay3Sets2 + 1)
        }
    }
    function editDay3Workout2(){
        setWorkout2Day3Edit(true)
    }
    // Workout 3 Day 3
    let day3Name3 = e =>{
        setWorkoutDay3Name3(e.target.value)
    }
    function day3Reps3Down(){
        if(workoutDay3Reps3 > 1){
            setWorkoutDay3Reps3(workoutDay3Reps3 - 1)
        }
    }
    function day3Reps3Up(){
        if(workoutDay3Reps3 < 30){
            setWorkoutDay3Reps3(workoutDay3Reps3 + 1)
        }
    }
    function day3Sets3Down(){
        if(workoutDay3Sets3 >1){
            setWorkoutDay3Sets3(workoutDay3Sets3 - 1)
        }
    }
    function day3Sets3Up(){
        if(workoutDay3Sets3 < 10){
            setWorkoutDay3Sets3(workoutDay3Sets3 + 1)
        }
    }
    function editDay3Workout3(){
        setWorkout3Day3Edit(true)
    }
    // Workout 4 Day 3
    let day3Name4 = e =>{
        setWorkoutDay3Name4(e.target.value)
    }
    function day3Reps4Down(){
        if(workoutDay3Reps4 > 1){
            setWorkoutDay3Reps4(workoutDay3Reps4 - 1)
        }
    }
    function day3Reps4Up(){
        if(workoutDay3Reps4 < 30){
            setWorkoutDay3Reps4(workoutDay3Reps4 + 1)
        }
    }
    function day3Sets4Down(){
        if(workoutDay3Sets4 >1){
            setWorkoutDay3Sets4(workoutDay3Sets4 - 1)
        }
    }
    function day3Sets4Up(){
        if(workoutDay3Sets4 < 10){
            setWorkoutDay3Sets4(workoutDay3Sets4 + 1)
        }
    }
    function editDay3Workout4(){
        setWorkout3Day4Edit(true)
    }
    // Workout 5 Day 3
    let day3Name5 = e =>{
        setWorkoutDay3Name5(e.target.value)
    }
    function day3Reps5Down(){
        if(workoutDay3Reps5 > 1){
            setWorkoutDay3Reps5(workoutDay3Reps5 - 1)
        }
    }
    function day3Reps5Up(){
        if(workoutDay3Reps5 < 30){
            setWorkoutDay3Reps5(workoutDay3Reps5 + 1)
        }
    }
    function day3Sets5Down(){
        if(workoutDay3Sets5 >1){
            setWorkoutDay3Sets5(workoutDay3Sets5 - 1)
        }
    }
    function day3Sets5Up(){
        if(workoutDay3Sets5 < 10){
            setWorkoutDay3Sets5(workoutDay3Sets5 + 1)
        }
    }
    function editDay3Workout5(){
        setWorkout5Day3Edit(true)
    }
    // 
    // Workout 1 Day 4
    // 
    let day4Name1 = e =>{
        setWorkoutDay4Name1(e.target.value)
    }
    function day4Reps1Down(){
        if(workoutDay4Reps1 > 1){
            setWorkoutDay4Reps1(workoutDay4Reps1 - 1)
        }
    }
    function day4Reps1Up(){
        if(workoutDay4Reps1 < 30){
            setWorkoutDay4Reps1(workoutDay4Reps1 + 1)
        }
    }
    function day4Sets1Down(){
        if(workoutDay4Sets1 >1){
            setWorkoutDay4Sets1(workoutDay4Sets1 - 1)
        }
    }
    function day4Sets1Up(){
        if(workoutDay4Sets1 < 10){
            setWorkoutDay4Sets1(workoutDay4Sets1 + 1)
        }
    }
    function editDay4Workout1(){
        setWorkout1Day4Edit(true)
    }
    // Workout 2 Day 4
    let day4Name2 = e =>{
        setWorkoutDay4Name2(e.target.value)
    }
    function day4Reps2Down(){
        if(workoutDay4Reps2 > 1){
            setWorkoutDay4Reps2(workoutDay4Reps2 - 1)
        }
    }
    function day4Reps2Up(){
        if(workoutDay4Reps2 < 30){
            setWorkoutDay4Reps2(workoutDay4Reps2 + 1)
        }
    }
    function day4Sets2Down(){
        if(workoutDay4Sets2 >1){
            setWorkoutDay4Sets2(workoutDay4Sets2 - 1)
        }
    }
    function day4Sets2Up(){
        if(workoutDay4Sets2 < 10){
            setWorkoutDay4Sets2(workoutDay4Sets2 + 1)
        }
    }
    function editDay4Workout2(){
        setWorkout2Day4Edit(true)
    }
    // Workout 3 Day 4
    let day4Name3 = e =>{
        setWorkoutDay4Name3(e.target.value)
    }
    function day4Reps3Down(){
        if(workoutDay4Reps3 > 1){
            setWorkoutDay4Reps3(workoutDay4Reps3 - 1)
        }
    }
    function day4Reps3Up(){
        if(workoutDay4Reps3 < 30){
            setWorkoutDay4Reps3(workoutDay4Reps3 + 1)
        }
    }
    function day4Sets3Down(){
        if(workoutDay4Sets3 >1){
            setWorkoutDay4Sets3(workoutDay4Sets3 - 1)
        }
    }
    function day4Sets3Up(){
        if(workoutDay4Sets3 < 10){
            setWorkoutDay4Sets3(workoutDay4Sets3 + 1)
        }
    }
    function editDay4Workout3(){
        setWorkout3Day4Edit(true)
    }
    // Workout 4 Day 4
    let day4Name4 = e =>{
        setWorkoutDay4Name4(e.target.value)
    }
    function day4Reps4Down(){
        if(workoutDay4Reps4 > 1){
            setWorkoutDay4Reps4(workoutDay4Reps4 - 1)
        }
    }
    function day4Reps4Up(){
        if(workoutDay4Reps4 < 30){
            setWorkoutDay4Reps4(workoutDay4Reps4 + 1)
        }
    }
    function day4Sets4Down(){
        if(workoutDay4Sets4 >1){
            setWorkoutDay4Sets4(workoutDay4Sets4 - 1)
        }
    }
    function day4Sets4Up(){
        if(workoutDay4Sets4 < 10){
            setWorkoutDay4Sets4(workoutDay4Sets4 + 1)
        }
    }
    function editDay4Workout4(){
        setWorkout4Day4Edit(true)
    }
    // Workout 5 Day 4
    let day4Name5 = e =>{
        setWorkoutDay4Name5(e.target.value)
    }
    function day4Reps5Down(){
        if(workoutDay4Reps5 > 1){
            setWorkoutDay4Reps5(workoutDay4Reps5 - 1)
        }
    }
    function day4Reps5Up(){
        if(workoutDay4Reps5 < 30){
            setWorkoutDay4Reps5(workoutDay4Reps5 + 1)
        }
    }
    function day4Sets5Down(){
        if(workoutDay4Sets5 >1){
            setWorkoutDay4Sets5(workoutDay4Sets5 - 1)
        }
    }
    function day4Sets5Up(){
        if(workoutDay4Sets5 < 10){
            setWorkoutDay4Sets5(workoutDay4Sets5 + 1)
        }
    }
    function editDay4Workout5(){
        setWorkout5Day4Edit(true)
    }
    // 
    // Workout 1 Day 5
    // 
    let day5Name1 = e =>{
        setWorkoutDay5Name1(e.target.value)
    }
    function day5Reps1Down(){
        if(workoutDay5Reps1 > 1){
            setWorkoutDay5Reps1(workoutDay5Reps1 - 1)
        }
    }
    function day5Reps1Up(){
        if(workoutDay5Reps1 < 30){
            setWorkoutDay5Reps1(workoutDay5Reps1 + 1)
        }
    }
    function day5Sets1Down(){
        if(workoutDay5Sets1 >1){
            setWorkoutDay5Sets1(workoutDay5Sets1 - 1)
        }
    }
    function day5Sets1Up(){
        if(workoutDay5Sets1 < 10){
            setWorkoutDay5Sets1(workoutDay5Sets1 + 1)
        }
    }
    function editDay5Workout1(){
        setWorkout1Day5Edit(true)
    }
    // Workout 2 Day 5
    let day5Name2 = e =>{
        setWorkoutDay5Name2(e.target.value)
    }
    function day5Reps2Down(){
        if(workoutDay5Reps2 > 1){
            setWorkoutDay5Reps2(workoutDay5Reps2 - 1)
        }
    }
    function day5Reps2Up(){
        if(workoutDay5Reps2 < 30){
            setWorkoutDay5Reps2(workoutDay5Reps2 + 1)
        }
    }
    function day5Sets2Down(){
        if(workoutDay5Sets2 >1){
            setWorkoutDay5Sets2(workoutDay5Sets2 - 1)
        }
    }
    function day5Sets2Up(){
        if(workoutDay5Sets2 < 10){
            setWorkoutDay5Sets2(workoutDay5Sets2 + 1)
        }
    }
    function editDay5Workout2(){
        setWorkout2Day5Edit(true)
    }
    // Workout 3 Day 5
    let day5Name3 = e =>{
        setWorkoutDay5Name3(e.target.value)
    }
    function day5Reps3Down(){
        if(workoutDay5Reps3 > 1){
            setWorkoutDay5Reps3(workoutDay5Reps3 - 1)
        }
    }
    function day5Reps3Up(){
        if(workoutDay5Reps3 < 30){
            setWorkoutDay5Reps3(workoutDay5Reps3 + 1)
        }
    }
    function day5Sets3Down(){
        if(workoutDay5Sets3 >1){
            setWorkoutDay5Sets3(workoutDay5Sets3 - 1)
        }
    }
    function day5Sets3Up(){
        if(workoutDay5Sets3 < 10){
            setWorkoutDay5Sets3(workoutDay5Sets3 + 1)
        }
    }
    function editDay5Workout3(){
        setWorkout3Day5Edit(true)
    }
    // Workout 4 Day 5
    let day5Name4 = e =>{
        setWorkoutDay5Name4(e.target.value)
    }
    function day5Reps4Down(){
        if(workoutDay5Reps4 > 1){
            setWorkoutDay5Reps4(workoutDay5Reps4 - 1)
        }
    }
    function day5Reps4Up(){
        if(workoutDay5Reps4 < 30){
            setWorkoutDay5Reps4(workoutDay5Reps4 + 1)
        }
    }
    function day5Sets4Down(){
        if(workoutDay5Sets4 >1){
            setWorkoutDay5Sets4(workoutDay5Sets4 - 1)
        }
    }
    function day5Sets4Up(){
        if(workoutDay5Sets4 < 10){
            setWorkoutDay5Sets4(workoutDay5Sets4 + 1)
        }
    }
    function editDay5Workout4(){
        setWorkout4Day5Edit(true)
    }
    // Workout 5 Day 5
    let day5Name5 = e =>{
        setWorkoutDay5Name5(e.target.value)
    }
    function day5Reps5Down(){
        if(workoutDay5Reps5 > 1){
            setWorkoutDay5Reps5(workoutDay5Reps5 - 1)
        }
    }
    function day5Reps5Up(){
        if(workoutDay5Reps5 < 30){
            setWorkoutDay5Reps5(workoutDay5Reps5 + 1)
        }
    }
    function day5Sets5Down(){
        if(workoutDay5Sets5 >1){
            setWorkoutDay5Sets5(workoutDay5Sets5 - 1)
        }
    }
    function day5Sets5Up(){
        if(workoutDay5Sets5 < 10){
            setWorkoutDay5Sets5(workoutDay5Sets5 + 1)
        }
    }
    function editDay5Workout5(){
        setWorkout5Day5Edit(true)
    }
    

    return(
        <div>
            <h1>Workouts</h1>
            <p>Username:{username}</p>
            <h2 className='day'>Day 1:</h2>
            <div className='workoutHolder'>
                <div className='workout'>
                    <div>
                        {workoutDay1Name1 === '' ? (
                            <h3 className='text'>Workout 1:</h3>
                        ):(
                            <h3 className='text'>{workoutDay1Name1}</h3>
                        )}
                        {workout1Day1Edit === true ? (
                            <input 
                                placeholder='Change Name:'
                                type='text' 
                                maxLength={30} 
                                onChange={day1Name1}/>
                        ):(
                            null
                        )}
                    </div>
                    <div>
                        <p className='text'>Reps:{workoutDay1Reps1}</p>
                        {workout1Day1Edit === true ? (
                        <div className='buttonHolder'>
                            <Button onClick={() => day1Reps1Down()} className={style.downButton}>{'<<<'}</Button>
                            <Button onClick={() => day1Reps1Up()} className={style.upButton}>{'>>>'}</Button>
                        </div>
                        ):(
                            null
                        )}
                    </div>
                    <div>
                        <p className='text'>Sets:{workoutDay1Sets1}</p>
                        {workout1Day1Edit === true ? (
                        <div className='buttonHolder'>
                            <Button onClick={() => day1Sets1Down()} className={style.downButton}>{'<<<'}</Button>
                            <Button onClick={() => day1Sets1Up()} className={style.upButton}>{'>>>'}</Button>
                        </div>
                        ):(
                            null
                        )}
                    </div>
                    {workout1Day1Edit === true ? (
                        <Button onClick={() => updateDay1Workout1()}className={style.button}>Submit</Button>
                        ):(
                        <Button onClick={() => editDay1Workout1()}className={style.button}>Edit</Button>
                    )}
                </div>
                <div className='workout'>
                    <div>
                        {workoutDay1Name2 === '' ? (
                            <h3 className='text'>Workout 2:</h3>
                        ):(
                            <h3 className='text'>{workoutDay1Name2}</h3>
                        )}
                        {workout2Day1Edit === true ? (
                            <input
                                placeholder='Change Name:'
                                type='text' 
                                maxLength={30} 
                                onChange={day1Name2}/>

                        ):(
                            null
                        )}
                    </div>
                    <div>
                        <p className='text'>Reps:{workoutDay1Reps2}</p>
                        {workout2Day1Edit === true ? (
                            <div className='buttonHolder'>
                                <Button onClick={() => day1Reps2Down()} className={style.downButton}>{'<<<'}</Button>
                                <Button onClick={() => day1Reps2Up()} className={style.upButton}>{'>>>'}</Button>
                         </div>

                        ):(
                            null
                        )}
                    </div>
                    <div>
                        <p className='text'>Sets:{workoutDay1Sets2}</p>
                        {workout2Day1Edit === true ? (
                        <div className='buttonHolder'>
                            <Button onClick={() => day1Sets2Down()} className={style.downButton}>{'<<<'}</Button>
                            <Button onClick={() => day1Sets2Up()} className={style.upButton}>{'>>>'}</Button>
                        </div>
                        ):(
                            null
                        )}
                    </div>
                        {workout2Day1Edit === true ? (
                        <Button className={style.button}>Submit</Button>
                        ):(
                        <Button onClick={() => editDay1Workout2()}className={style.button}>Edit</Button>
                        )}
                </div>
                <div className='workout'>
                    <div>
                        {workoutDay1Name3 === '' ? (
                            <h3 className='text'>Workout 3:</h3>
                        ):(
                            <h3 className='text'>{workoutDay1Name3}</h3>
                        )}
                        {workout3Day1Edit === true ? (
                            <input 
                                placeholder='Change Name:'
                                type='text' 
                                maxLength={30} 
                                onChange={day1Name3}/>
                        ):(
                            null
                        )}
                    </div>
                    <div>
                        <p className='text'>Reps:{workoutDay1Reps3}</p>
                        {workout3Day1Edit === true ? (
                        <div className='buttonHolder'>
                            <Button onClick={() => day1Reps3Down()} className={style.downButton}>{'<<<'}</Button>
                            <Button onClick={() => day1Reps3Up()} className={style.upButton}>{'>>>'}</Button>
                        </div>
                        ):(
                            null
                        )}
                    </div>
                    <div>
                        <p className='text'>Sets:{workoutDay1Sets3}</p>
                        {workout3Day1Edit === true ? (
                        <div className='buttonHolder'>
                            <Button onClick={() => day1Sets3Down()} className={style.downButton}>{'<<<'}</Button>
                            <Button onClick={() => day1Sets3Up()} className={style.upButton}>{'>>>'}</Button>
                        </div>
                        ):(
                            null
                        )}
                    </div>
                    {workout3Day1Edit === true ? (
                        <Button className={style.button}>Submit</Button>
                        ):(
                        <Button onClick={() => editDay1Workout3()}className={style.button}>Edit</Button>
                    )}
                </div>
                <div className='workout'>
                    <div>
                        {workoutDay1Name4 === '' ? (
                            <h3 className='text'>Workout 4:</h3>
                        ):(
                            <h3 className='text'>{workoutDay1Name4}</h3>
                        )}
                        {workout4Day1Edit === true ? (
                            <input
                                placeholder='Change Name:'
                                type='text' 
                                maxLength={30} 
                                onChange={day1Name4}/>
                        ):(
                            null
                        )}

                    </div>
                    <div>
                        <p className='text'>Reps:{workoutDay1Reps4}</p>
                        {workout4Day1Edit === true ? (
                        <div className='buttonHolder'>
                            <Button onClick={() => day1Reps4Down()} className={style.downButton}>{'<<<'}</Button>
                            <Button onClick={() => day1Reps4Up()} className={style.upButton}>{'>>>'}</Button>
                        </div>
                        ):(
                            null
                        )}
                    </div>
                    <div>
                        <p className='text'>Sets:{workoutDay1Sets4}</p>
                        {workout4Day1Edit === true ? (
                        <div className='buttonHolder'>
                            <Button onClick={() => day1Sets4Down()} className={style.downButton}>{'<<<'}</Button>
                            <Button onClick={() => day1Sets4Up()} className={style.upButton}>{'>>>'}</Button>
                        </div>
                        ):(
                            null
                        )}
                    </div>
                    {workout4Day1Edit === true ? (
                        <Button className={style.button}>Submit</Button>
                        ):(
                        <Button onClick={() => editDay1Workout4()}className={style.button}>Edit</Button>
                    )}
                </div>
                <div className='workout'>
                    <div>
                        {workoutDay1Name5 === '' ? (
                            <h3 className='text'>Workout 5:</h3>
                        ):(
                            <h3 className='text'>{workoutDay1Name5}</h3>
                        )}
                        {workout5Day1Edit === true ? (
                            <input 
                                placeholder='Change Name:'
                                type='text' 
                                maxLength={30} 
                                onChange={day1Name5}/>
                        ):(
                            null
                        )}
                    </div>
                    <div>
                        <p className='text'>Reps:{workoutDay1Reps5}</p>
                        {workout5Day1Edit === true ? (
                        <div className='buttonHolder'>
                            <Button onClick={() => day1Reps5Down()} className={style.downButton}>{'<<<'}</Button>
                            <Button onClick={() => day1Reps5Up()} className={style.upButton}>{'>>>'}</Button>
                        </div>
                        ):(
                            null
                        )}
                    </div>
                    <div>
                        <p className='text'>Sets:{workoutDay1Sets5}</p>
                        {workout5Day1Edit === true ? (
                        <div className='buttonHolder'>
                            <Button onClick={() => day1Sets5Down()} className={style.downButton}>{'<<<'}</Button>
                            <Button onClick={() => day1Sets5Up()} className={style.upButton}>{'>>>'}</Button>
                        </div>
                        ):(
                            null
                        )}
                    </div>
                    {workout5Day1Edit === true ? (
                        <Button className={style.button}>Submit</Button>
                        ):(
                        <Button onClick={() => editDay1Workout5()}className={style.button}>Edit</Button>
                    )}
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