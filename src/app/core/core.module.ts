import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[HeaderComponent],
  // providers:[
  //   { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  // ]
  //commented as the ny times api rejected headers
})
export class CoreModule { }
