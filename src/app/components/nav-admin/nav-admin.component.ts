import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})
export class NavAdminComponent implements OnInit {

  constructor(private _loginservice : LoginService) { }

  ngOnInit(): void {
  }

  logout() {
    this._loginservice.deleteToken();
    window.location.href = "/admin";
  }

}
