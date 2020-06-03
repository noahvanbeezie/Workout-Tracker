const initialState = {
    username:''
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
            return{...state,username:payload.username}
        default:
            return state
    }
}