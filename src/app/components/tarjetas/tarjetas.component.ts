import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
  productos : any = [];
  producto = {};
  
  constructor(private _productoservice : ProductosService, private modalService: NgbModal) {  
  }

  ngOnInit(): void {
    this._productoservice.getProductos().subscribe(data => {
      this.productos = data
    })
  }

  carrito(){

    const modal = this.modalService.open(CarritoComponent, { size: 'xl'});
    modal.componentInstance.nombre = 'Hamburguesa';
    modal.componentInstance.precio = '12.000';
  }

}
