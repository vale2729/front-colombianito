import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit, OnChanges {
  @Input() categoria: number = 0;
  productos : any = [];
  productoCategoria : any = [];

  constructor(private _productoservice : ProductosService, private modalService: NgbModal) {  
  }

  ngOnInit(): void {
    this._productoservice.getProductos().subscribe(data => {
      this.productos = data
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.categoria);
    this._productoservice.getProductos().subscribe(data => {
      this.productos = data;
      this.productoCategoria = this.productos.filter((element: { categoria: number; }) => element.categoria === this.categoria);
      console.log(this.productoCategoria);
      this.productos = this.productoCategoria;
    })
  }

  carrito(){


    const modal = this.modalService.open(CarritoComponent, { size: 'xl'});
    modal.componentInstance.nombre = 'Hamburguesa';
    modal.componentInstance.precio = '12.000';
  }

}
