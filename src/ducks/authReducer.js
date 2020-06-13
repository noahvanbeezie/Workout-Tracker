const initialState = {
    username:'',
    age:0,
    weight:0,
    feet:6,
    inches:7
}

const GET_USER = 'GET_USER'

export function getUser(userObj){
    return{
        type:GET_USER,
        payload:userObj
    }

}

export default function authReducer(state=initialState, action){
    const {type,payload} = action

    switch(type){
        case GET_USER:
            return{...state,username:payload.username,age:payload.age,weight:payload.weight,feet:payload.feet,inches:payload.inches}
        default:
            return state
    }
}