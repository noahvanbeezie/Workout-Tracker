import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Profile from './Components/Profile/Profile'
import Workouts from './Components/Workouts/Workouts'

export default(
    <Switch>
        <Route exact path = '/' component={Auth}/>
        <Route path = '/profile' component={Profile}/>
        <Route path = '/workouts' component={Workouts}/>
    </Switch>
)