import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModificadoresService } from 'src/app/services/modificadores/modificadores.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-estado-producto-sucursales',
  templateUrl: './estado-producto-sucursales.component.html',
  styleUrls: ['./estado-producto-sucursales.component.scss']
})
export class EstadoProductoSucursalesComponent implements OnInit {

  id_producto: string = '';
  producto: any = [];
  productos: any = [];
  productoConsultado: any = [];

  formulario : FormGroup;
  

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal,
    private ruta: Router, private _productoService: ProductosService,  private formBuilder: FormBuilder) {
    this.formulario = new FormGroup({});
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.consultarCiudad();
  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
       // campos que voy son iguales al de html 
      categoria_Producto : ['', [Validators.required]],
      nombre_Producto : ['',[Validators.required]],
      description_Producto: ['',[Validators.required]],
      precio_Producto: ['',[Validators.required]],
      img_Producto: ['',[Validators.required]],
      sucursal_Producto:['', [Validators.required]],
      estado_Producto: ['',[Validators.required]]
    });
  }

  consultarCiudad() {
    this._productoService.getProductos().subscribe(data => {
      this.productos = data;
      this.productoConsultado = this.productos.filter((element: { id_producto: string; }) => element.id_producto == this.id_producto);

      this.formulario = this.formBuilder.group({
        // llena los campos son los de html
        categoria_Producto:[this.productoConsultado[0].categoria, [Validators.required]],
        nombre_Producto:[this.productoConsultado[0].nombre, [Validators.required]],
        description_Producto:[this.productoConsultado[0].descripcion, [Validators.required]],
        precio_Producto:[this.productoConsultado[0].precio, [Validators.required]],
        img_Producto:[this.productoConsultado[0].img, [Validators.required]],
        sucursal_Producto:[this.productoConsultado[0].sucursal, [Validators.required]],
        estado_Producto:[this.productoConsultado[0].estado, [Validators.required]]
      });
    });
  }

  editar() {
    this.producto = {
       // aqui guardo basa de datos igual a la base de datos
      id_producto: this.productoConsultado[0].id_producto,
      categoria:this.formulario.value.categoria_Producto,
      nombre:this.formulario.value.nombre_Producto,
      descripcion:this.formulario.value.descripcion_Producto,
      precio:this.formulario.value.precio_Producto,
      img:this.formulario.value.img_Producto,
      sucursal:this.formulario.value.sucursal_Producto,
      estado:this.formulario.value.estado_Producto, 
    };
    console.log(this.producto);
    this._productoService.updateProductos(this.producto).subscribe(data => {
      this.producto = data;
      console.log(this.producto);
      if (Object.keys(this.producto).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'Este producto ya se encuentra registrado';
      } else if (this.producto === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El producto se edito con exito';
        this.redirectTo('sucursal/inicio-sucursal/productosSucursales');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El producto no se pudo editar, intentalo de nuevo';
      }
    })

  }

  redirectTo(uri: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([uri]));
  }

}
