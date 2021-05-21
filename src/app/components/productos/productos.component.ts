import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { RegistroProductosComponent } from '../registro-productos/registro-productos.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { EditarProductosComponent } from '../editar-productos/editar-productos.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

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

  registroProducto(){
    const modal = this.modalService.open(RegistroProductosComponent, { size: 'md'});
    modal.componentInstance.name = 'vale';
  }
  editarProducto(id:number){
    console.log(id);
    const modal = this.modalService.open(EditarProductosComponent, { size: 'md'});
    modal.componentInstance.id_producto = id;
  }
  
  eliminarProducto(id:number){
    console.log(id);
    const modal = this.modalService.open(ModalDeleteComponent, { size: 'md'});
    modal.componentInstance.mensaje = '¿Desea eliminar este Producto?';
    modal.componentInstance.id = id;
    modal.componentInstance.tabla = 'productos';
  }

}
