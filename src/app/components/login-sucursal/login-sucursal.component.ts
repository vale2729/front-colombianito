import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-login-sucursal',
  templateUrl: './login-sucursal.component.html',
  styleUrls: ['./login-sucursal.component.scss']
})
export class LoginSucursalComponent implements OnInit {

  user : string = '';
  clave: string = '';
  user1 : any = {};

  constructor(private _loginservice: LoginService, private modalService: NgbModal, private ruta : Router) { }

  ngOnInit(): void {
  }

  loginsucursal(){
    this.user1 = { usuario: this.user, clave: this.clave };

    this._loginservice.loginSucursal(this.user1).subscribe(data => {
      console.log(data);
      if (Object.keys(data).length > 0){
        this.ruta.navigate(['sucursal/inicio-sucursal']);
      }else{
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El usuario no se encuentra registrado';
      }
    });
  }

}
