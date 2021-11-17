import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(
    public router: Router,
    public spinner: NgxSpinnerService,
    public toastr: ToastrService,
    public location: Location
  ) { }
}