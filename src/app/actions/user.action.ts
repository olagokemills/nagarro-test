import { Action } from '@ngrx/store';
// import { Tutorial } from "./../models/tutorials.model";
import { Users } from '../core/model/users.model';

export const LOGIN_USER = '[USERS] Login'
export const LOGOUT_USER = '[USERS] Logout'

export class UserLogin implements Action{
    readonly type =  LOGIN_USER 
    constructor(public payload:Users) {}
}


export class UserLogout implements Action{
    readonly type = LOGOUT_USER
    constructor(public payload:number) {}
}

export type Actions = UserLogin | UserLogout 