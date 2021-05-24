import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login/login.service';
import { OrdenesService } from 'src/app/services/ordenes/ordenes.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

  formulario: FormGroup;
  orden: any = {};
  id_orden: number = 0;
  productosAdd = [{
    id_producto: 0,
    nombre: '',
    precio: 0,
    img: ''
  }];
  productoOrden: any = [];
  total = 0;

  constructor(private formBuilder: FormBuilder, private _loginservice: LoginService, private _ordenesService: OrdenesService,
    private _productoservice: ProductosService, private modalService: NgbModal, private ruta: Router) {
    this.formulario = new FormGroup({});
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.productosAdd = this._productoservice.getProductosAdd();
    for (var i = 0; i < this.productosAdd.length; i++) {
      this.total = this.total + this.productosAdd[i].precio;
    }
    console.log(this.productosAdd);
  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]]
    });
  }

  pagar() {

    this.orden = {
      cliente: this._loginservice.getToken(),
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono,
      pago: 'si',
      estado: 'pendiente',
      sucursal: 6
    }

    this._ordenesService.setOrden(this.orden).subscribe(data => {
      this.orden = data;
      this.id_orden = this.orden.id;

      if (Object.keys(this.orden).length > 0) {
        for (var i = 0; i < this.productosAdd.length; i++) {
          this.productoOrden = {
            id_orden: this.id_orden,
            producto: this.productosAdd[i].id_producto,
            modificadores: 6
          }
          this._ordenesService.setOrdenProducto(this.productoOrden).subscribe(data => {
            this.productoOrden = data;
            console.log(this.productoOrden);
          });
        }
        if (Object.keys(this.productoOrden).length > 2) {
          const modal = this.modalService.open(ModalComponent);
          modal.componentInstance.name = 'La orden se creo con exito';
          this.ruta.navigate(['']);
        } else {
          const modal = this.modalService.open(ModalComponent);
          modal.componentInstance.name = 'La orden no se pudo registrar, intentalo de nuevo';
        }

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La orden no se pudo registrar, intentalo de nuevo';
      }




    })


  }

}
