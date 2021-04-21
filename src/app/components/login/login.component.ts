import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : string = '';
  clave: string = '';
  user1 : any = {};

  constructor(private _loginservice: LoginService, private ruta : Router) {  }

  ngOnInit(): void {
  }

  login() {

    this.user1 = { usuario: this.user, clave: this.clave };

    this._loginservice.login(this.user1).subscribe(data => {
      console.log(data);
      if (Object.keys(data).length > 0){
        alert('El usuario existe');
        this.ruta.navigate(['inicio']);
      }else{
        alert('El usuario no existe');
      }
    });
  }


}