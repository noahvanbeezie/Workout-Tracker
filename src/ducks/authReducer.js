import axios from 'axios'

const initialState = {
    player:{},
    loading:false,
    error:false
}

export default function authReducer(state, action){
    if (!state) return{initialState}
    if (!action) return{state}

    switch(action.type){
        
        default:
            return state
    }
}