import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModificadoresService } from 'src/app/services/modificadores/modificadores.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-editar-modificador',
  templateUrl: './editar-modificador.component.html',
  styleUrls: ['./editar-modificador.component.scss']
})
export class EditarModificadorComponent implements OnInit {

  id_modificador: string = '';
  modificador: any = [];
  modificadores: any = [];
  productos: any = [];
  componentRef: any;
  modificadorConsultado: any = [];

  formulario: FormGroup;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _modificadorService: ModificadoresService,
    private ruta: Router, private _productoService: ProductosService, private formBuilder: FormBuilder) {
    this.formulario = new FormGroup({});
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.consultarModificador();
  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
      modificador: ['', [Validators.required]],
      direccion_orden: ['', [Validators.required]],
      pago_orden: ['', [Validators.required]],
      
    })
  }

  consultarModificador() {
    this._modificadorService.getModificador().subscribe(data => {
      this.modificadores = data;
      this.modificadorConsultado = this.modificadores.filter((element: { id_modificador: string; }) =>
        element.id_modificador === this.id_modificador);

      this.formulario = this.formBuilder.group({
        modificador: [this.modificadorConsultado[0].modificador, [Validators.required]],
        producto: [this.modificadorConsultado[0].producto, [Validators.required]]
      })

    });
    this._productoService.getProductos().subscribe(data => {
      this.productos = data;
    })
  }

  editar() {
    this.modificador = {
      id_modificador: this.modificadorConsultado[0].id_modificador,
      modificador: this.formulario.value.modificador,
      producto: this.formulario.value.producto
    };

    this._modificadorService.updateModificador(this.modificador).subscribe(data => {
      this.modificador = data;
      console.log(this.modificador);
      if (this.modificador === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El modificador se edito con exito';
        this.redirectTo('admin/inicio-admin/modificadores');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El modificador no se pudo editar, intentalo de nuevo';
      }
    })

  }

  redirectTo(uri: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([uri]));
  }

}
