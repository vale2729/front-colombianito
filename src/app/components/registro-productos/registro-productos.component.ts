import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.scss']
})
export class RegistroProductosComponent implements OnInit {
  
  categorias : any= [];
  rproducto: any = [];
  
  formulario: FormGroup;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal,  private _productoService1 : ProductosService, private _categoriaService : CategoriasService,
  private ruta: Router, private formBuilder : FormBuilder) {
      this.formulario = new FormGroup({});
      this.crearFormulario();
  }

  ngOnInit(): void {
    this._categoriaService.getCategorias().subscribe(data => {
      this.categorias=data;
    })
  }
  crearFormulario(){
    this.formulario = this.formBuilder.group({
      categoria_Producto : ['',[Validators.required]],
      nombre_Producto : ['', [Validators.required]],
      descripcion_Producto : ['', [Validators.required]],
      precio_Producto : ['', [Validators.required]],
      img_Producto : ['', [Validators.required]],
      estado_Producto : ['', [Validators.required]],
    })
  }

  insertar() {
    this.rproducto = {
      categoria_Producto: this.formulario.value.categoria_Producto,
      nombre_Producto:this.formulario.value.nombre_Producto,
      descripcion_Producto:this.formulario.value.descripcion_Producto,
      precio_Producto:this.formulario.value.precio_Producto,
      img_Producto:this.formulario.value.img_Producto,
      estado_Producto:this.formulario.value.estado_Producto
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
