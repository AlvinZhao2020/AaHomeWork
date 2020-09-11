import * as SessionUtils from '../utils/session'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

const receiveCUser = user=>({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCUser = ()=>{
    return({
        type: LOGOUT_CURRENT_USER
    })
}

export const login =(user) =>dispatch=>{
    SessionUtils.postSession(user)
    .then((user)=>dispatch(receiveCUser(user)))
}

export const logout =()=> dispatch=>{
    SessionUtils.deleteSession()
    .then(()=>dispatch(logoutCUser()))
}

export const createNewUser =(formuser)=>dispatch=>{
    SessionUtils.postUser(formuser)
    .then((user)=>dispatch(receiveCUser(user)));
}