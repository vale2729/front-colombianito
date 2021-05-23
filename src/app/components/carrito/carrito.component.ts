import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login/login.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  productosAdd = [{
    nombre : '',
    precio : 0,
    img : ''
  }];
  total = 0;
  cantidad = 0;

  constructor(public activeModal: NgbActiveModal, private ruta: Router, private _loginservice: LoginService,
    private modalService: NgbModal, private _productoservice : ProductosService) { }

  ngOnInit(): void {
    this.productosAdd = this._productoservice.getProductosAdd();
    for (var i = 0; i < this.productosAdd.length; i++){
      this.total = this.total + this.productosAdd[i].precio;
      this.cantidad += 1;
    }
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

  cancelar(){
    this._productoservice.setProductosAdd([]);
    this.activeModal.close();
  }

}
