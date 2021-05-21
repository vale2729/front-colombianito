import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { EstadoProductoSucursalesComponent } from '../estado-producto-sucursales/estado-producto-sucursales.component';


@Component({
  selector: 'app-productos-sucursales',
  templateUrl: './productos-sucursales.component.html',
  styleUrls: ['./productos-sucursales.component.scss']
})
export class ProductosSucursalesComponent implements OnInit {

  
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  productos : any = [];
  item : number = 0;

  constructor(private _productoservice: ProductosService, private modalService: NgbModal) {
    this.refreshProductos();
  }

  refreshProductos() {
    this.productos
      .map((producto:any, i:any) => ({id: i + 1, ...producto}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this._productoservice.getProductos().subscribe(data => {
      this.productos = data;
      this.collectionSize = this.productos.length;
      console.log(this.productos);
    })
  }
// para abrir otro modal pa editar el estado del producto 

 EditarEstadoProducto(id:number){
   console.log(id);
    const modal = this.modalService.open(EstadoProductoSucursalesComponent, { size: 'md'});
    modal.componentInstance.id_producto = id;
  }
   
}

