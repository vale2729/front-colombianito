import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModificadoresService } from 'src/app/services/modificadores/modificadores.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-registro-modificadores',
  templateUrl: './registro-modificadores.component.html',
  styleUrls: ['./registro-modificadores.component.scss']
})
export class RegistroModificadoresComponent implements OnInit {

  modificador: any = [];
  productos: any = [];
  componentRef: any;

  formulario : FormGroup;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _modificadorService: ModificadoresService,
    private ruta: Router, private _productoService : ProductosService, private formBuilder : FormBuilder) { 
      this.formulario = new FormGroup({});
      this.crearFormulario();
    }

  ngOnInit(): void {
    this._productoService.getProductos().subscribe(data => {
      this.productos = data;
    })
  }

  crearFormulario(){
    this.formulario = this.formBuilder.group({
      modificador : ['',[Validators.required]],
      producto : ['',[Validators.required]]
    })
  }

  insertar() {
    this.modificador = {
      modificador: this.formulario.value.modificador,
      producto: this.formulario.value.producto
    };

    console.log(this.modificador);

    this._modificadorService.setModificador(this.modificador).subscribe(data => {
      this.modificador = data;
      console.log(this.modificador);
      if (Object.keys(this.modificador).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El modificador se creo con exito';
        this.redirectTo('admin/inicio-admin/modificadores');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El modificador no se pudo registrar, intentalo de nuevo';
      }
    })

  }

  redirectTo(url: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([url]));
  }
}
