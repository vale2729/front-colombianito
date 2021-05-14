import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.scss']
})
export class RegistroProductosComponent implements OnInit {
  categoriaProducto: string = '';
  nombreProducto: string = '';
  descripcionProducto: string = '';
  precioProducto: string = '';
  imgProducto: string = '';
  estadoProducto:string = '';
  categorias : any= [];
  rproducto: any = [];
  
//private _productoService : ProductoService
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal,  private _productoService1 : ProductosService, private _categoriaService : CategoriasService,
  private ruta: Router) { }


  ngOnInit(): void {
    this._categoriaService.getCategorias().subscribe(data => {
      this.categorias=data;
    })
  }

  insertar() {
    this.rproducto = {
      categoria_Producto: this.categoriaProducto,
      nombre_Producto:this.nombreProducto,
      descripcion_Producto:this.descripcionProducto,
      precio_Producto:this.precioProducto,
      img_Producto:this.imgProducto,
      estado_Producto:this.estadoProducto
    };

    this._productoService1.setProductos(this.rproducto).subscribe(data => {
      this.rproducto = data;
      console.log(this.rproducto);
      if (this.rproducto === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'Esta producto ya se encuentra registrado';
      } else if (Object.keys(this.rproducto).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El producto se creo con exito';
        this.redirectTo('admin/inicio-admin/productos');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El producto no se pudo registrar, intentalo de nuevo';
      }
    })

  }
  redirectTo(uri: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([uri]));
  }

}
