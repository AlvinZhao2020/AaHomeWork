import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session';

const defaultState ={
    currentUser: null
}

const sessionReducer =(oldState=defaultState, action)=>{
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({},{currentUser:action.user})
        case LOGOUT_CURRENT_USER:
            return defaultState
        default:
            return oldState;
    }
}

export default sessionReducer;