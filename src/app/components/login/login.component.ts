import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public variable : any = [];
  email: string = '';
  password: string = '';

  constructor(private _loginservice: LoginService) { 
    
  }

  ngOnInit(): void {
    this._loginservice.login().subscribe(console.log);
  }

  // this._loginservice.login().subscribe(data => {
  //     this.variable = data
  //   });

  login() {
    console.log(this.email);
    console.log(this.password);
  }


}