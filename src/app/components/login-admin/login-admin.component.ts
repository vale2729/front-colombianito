import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  user : string = '';
  clave: string = '';
  user1 : any = {};

  constructor(private _loginservice: LoginService, private modalService: NgbModal, private ruta : Router) { }

  ngOnInit(): void {
  }

  loginadmin(){
    this.user1 = { usuario: this.user, clave: this.clave };
    console.log(this.user1);
    this._loginservice.loginAdmin(this.user1).subscribe(data => {
      console.log(data);
      if (Object.keys(data).length > 0){
        alert('El usuario existe');
        this.ruta.navigate(['admin/inicio-admin']);
      }else{
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El usuario no se encuentra registrado';
      }
    });
  }


}
