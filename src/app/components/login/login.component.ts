import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // public variable : any = [];
  // constructor(private _loginservice: LoginService) { 
    
  // }

  // ngOnInit(): void {
  //   this._loginservice.login().subscribe(data => {
  //     this.variable = data
  //   });
  // }

  email: string = '';
  password: string = '';

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }

  ngOnInit(): void {}


}