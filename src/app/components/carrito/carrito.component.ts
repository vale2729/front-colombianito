import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login/login.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  @Input() nombre = {};
  @Input() precio = {};

  constructor(public activeModal: NgbActiveModal, private ruta: Router, private _loginservice: LoginService,
    private modalService: NgbModal) { }

  ngOnInit(): void {

  }

  pagar() {


    if (this._loginservice.isLoggedIn()) {
      this.activeModal.close();
      this.ruta.navigate(['ch/menu/pago']);
    } else {
      this.activeModal.close();
      const modal = this.modalService.open(ModalComponent);
      modal.componentInstance.name = 'Para continuar con el proceso de pago debe inciar sesión con su usurio y contraseña, en caso de no estar registrado, registrate!';
      this.ruta.navigate(['ch/login'])
    }


  }

}
