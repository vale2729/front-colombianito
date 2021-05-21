import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-nav-sucursal',
  templateUrl: './nav-sucursal.component.html',
  styleUrls: ['./nav-sucursal.component.scss']
})
export class NavSucursalComponent implements OnInit {

  constructor(private _loginservice: LoginService) { }

  ngOnInit(): void {
  }

  logout() {
    this._loginservice.deleteToken();
    window.location.href = "/sucursal";
  }

}
