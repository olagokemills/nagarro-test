import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalsService } from 'src/app/core/globals/Globals.service';
import { Users } from 'src/app/core/model/users.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as UserActions from 'src/app/actions/user.action'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private gVars:GlobalsService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(3)]]
    })
  }

  Register(data:Users)
  {
    this.gVars.spinner.show()
    this.authService.Register(data).subscribe(
      (res:any)=>{
        if(!res)
        {
          this.gVars.spinner.hide()
          this.gVars.toastr.error(res.message)
        }
        else{
          this.gVars.toastr.success("Registration Successful!")
          this.gVars.spinner.hide()
         
          let userData:Users = {email:data.email,password:res.access_token,searchTerm:[]}
          localStorage.setItem('userData',JSON.stringify(userData))
          this.store.dispatch(new UserActions.UserLogin(userData))
          this.authService.startRefreshTokenTimer() 
          this.gVars.router.navigate(['/home'])
        }
      }
    )
  }
}
