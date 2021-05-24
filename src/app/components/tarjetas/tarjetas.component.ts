import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login/login.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ProductoModificadorComponent } from '../producto-modificador/producto-modificador.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit, OnChanges {
  @Input() categoria: number = 0;
  productos : any = [];
  productoCategoria : any = [];

  

  constructor(private _productoservice : ProductosService, private modalService: NgbModal, private _loginservice: LoginService) {  
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
      this.productos = this.productoCategoria;
    })
  }

  carrito(id : number, nombre : string, precio : number, foto : string){
    
    const modal = this.modalService.open(ProductoModificadorComponent, { size: 'md'});
    modal.componentInstance.id = id;
    modal.componentInstance.nombre = nombre;
    modal.componentInstance.precio = precio;
    modal.componentInstance.foto = foto;
  }

}
