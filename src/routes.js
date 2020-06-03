import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'
import Landing from './Components/Landing/Landing'

export default(
    <Switch>
        <Route exact path = '/' component={Auth}/>
        <Route path = '/landing' component={Landing}/>
    </Switch>
)