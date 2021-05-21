import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  user : any = {};

  formulario : FormGroup;

  constructor(private _loginservice: LoginService, private modalService: NgbModal, private ruta : Router, 
    private formBuilder : FormBuilder) {
      this.formulario = new FormGroup({});
      this.crearFormulario();
     }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.formulario = this.formBuilder.group({
      user : ['',[Validators.required]],
      clave : ['',[Validators.required]]
    })
  }

  loginAdmin() {
    this.user = {
      usuario: this.formulario.value.user,
      clave: this.formulario.value.clave
    };
    if (this._loginservice.userLoginAdmin(this.user)) {
      this.ruta.navigate(['admin/inicio-admin']);
      //window.location.href = "/ch/menu";
    } else {
      alert('El usuario no se encuentra registrado');
    }
  }


}
