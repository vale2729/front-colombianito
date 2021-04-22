import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : string = '';
  clave: string = '';
  user1 : any = {};

  constructor(private _loginservice: LoginService, private ruta : Router, private modalService: NgbModal) {  }

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
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El usuario no se encuentra registrado';
      }
    });
  }


}