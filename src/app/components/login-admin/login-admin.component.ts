import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  loginadmin(){
    this.ruta.navigate(['admin/inicioadmin']);
  }

}
