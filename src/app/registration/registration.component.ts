import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public pwdHide : boolean = true;
  public confirmPwdHide : boolean = true;
  public confirmPwd = '';
  public model = {
    "username" : '',
    "email" : '',
    "password" : ''
  }

  constructor( private route : Router) { 
    localStorage.clear();
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.model)
    this.route.navigate(['/home'])
  }

}
