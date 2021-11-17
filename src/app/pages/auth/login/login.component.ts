import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { GlobalsService } from 'src/app/core/globals/Globals.service';
import { Users } from 'src/app/core/model/users.model';
import { AuthService } from 'src/app/core/services/auth.service';
import * as UserActions from 'src/app/actions/user.action'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm:FormGroup
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private gVars:GlobalsService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(3)]]
    })
  }
  Login(data:Users)
  {
    this.gVars.spinner.show()
    this.authService.Login(data).subscribe(
      (res:any)=>{
        if(!res)
        {
          this.gVars.spinner.hide()
          this.gVars.toastr.error("Please try again", res.message)
        }
        else{  
          this.gVars.spinner.hide()
          this.gVars.router.navigate(['/home'])
          let userData:Users = {email:data.email,password:res.access_token,searchTerm:[]}
          localStorage.setItem('userData',JSON.stringify(userData))
          this.store.dispatch(new UserActions.UserLogin(userData))
          this.authService.startRefreshTokenTimer()
        }
      }
    )
  }

}
