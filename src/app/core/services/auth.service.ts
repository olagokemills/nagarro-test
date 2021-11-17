import { Injectable } from "@angular/core";
import { Users } from '../model/users.model'
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, of } from "rxjs";
import { tap,catchError } from "rxjs/operators"
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})

export class AuthService{

    constructor(
        private http: HttpClient,
        private router: Router
    )
    {}

    Login(data):Observable<Users[]>
    {
        return this.http.post<Users[]>(`${environment.apis.authServer}/Login`, data)
    } 
    Register(data:Users)
    {
        return this.http.post(`${environment.apis.authServer}/register`, data)
    } 

   
    logout() {
        localStorage.clear()
        this.stopRefreshTokenTimer();
        this.router.navigate(['/auth/login']);
    }

    refreshToken() {
        let user = JSON.parse(localStorage.getItem('user'))
        return this.http.post<any>(`${environment.apis.authServer}/refereshToken`, user.password)
    }

    // helper methods

    private refreshTokenTimeout;

    public startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(sessionStorage.getItem('jwt').split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}