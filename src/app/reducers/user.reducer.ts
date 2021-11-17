

import { Users } from "../core/model/users.model";
import * as UserActions from './../actions/user.action'

let activeUser:Users = JSON.parse(localStorage.getItem('user'))
const initialState:Users = {    
    ...activeUser
}

export function reducer(state:Users[] = [initialState], action:UserActions.Actions)
{
    switch(action.type){
        case UserActions.LOGIN_USER:
            return [...state, action.payload];
        case UserActions.LOGOUT_USER:
            state.slice(action.payload, 1)    
            return state
        default:
            return state;
    }
}