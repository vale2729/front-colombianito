import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AuthStateService } from 'src/app/services/authState/auth-state.service';
import { LoginService } from 'src/app/services/login/login.service';
import { TokenService } from 'src/app/services/token/token.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {};


  formulario: FormGroup;
  errors = null;

  constructor(private _loginservice: LoginService, private modalService: NgbModal, private ruta: Router,
    private formBuilder: FormBuilder, private _token: TokenService, private _authState: AuthStateService) {
    this.formulario = new FormGroup({});
    this.crearFormulario();
  }

  ngOnInit(): void {

  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
      user: ['', [Validators.required]],
      clave: ['', [Validators.required]]
    })
  }

  login() {
    this.user = {
      usuario: this.formulario.value.user,
      clave: this.formulario.value.clave
    };
    if (this._loginservice.userlogin(this.user)) {
      this.ruta.navigate(['']);
      //window.location.href = "/ch/menu";
    } else {
      alert('El usuario no existe');
    }
  }

  redirectTo(url: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: false }).then(() =>
      this.ruta.navigate([url]));
  }


}