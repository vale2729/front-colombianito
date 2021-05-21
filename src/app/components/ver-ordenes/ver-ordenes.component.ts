import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdenesService } from 'src/app/services/ordenes/ordenes.service';
import { ModalComponent } from '../modal/modal.component';




@Component({
  selector: 'app-ver-ordenes',
  templateUrl: './ver-ordenes.component.html',
  styleUrls: ['./ver-ordenes.component.scss']
})
export class VerOrdenesComponent implements OnInit {

  id_Orden: string = '';
  // aqui veo todo 
  verOrdenenes: any = [];
  // esta es solo pa que la consulto
  OrdenConsultada: any = [];
  // para guardar orden 
  ordenFinal: any = [];

  formulario : FormGroup;
  

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _ordenService: OrdenesService, private ruta: Router, private formBuilder: FormBuilder) {
    this.formulario = new FormGroup({});
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.consultarOrdenes();
  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
      // campos que voy son iguales al de html 
      cliente_orden : ['', [Validators.required]],
      ciudad : ['',[Validators.required]],
      direccion_orden: ['',[Validators.required]],
      pago_orden: ['',[Validators.required]],
      estado_orden: ['',[Validators.required]],
      producto_orden : ['', [Validators.required]],
      modificadores_orden: ['',[Validators.required]],
      Sucursal_orden: ['',[Validators.required]]
    });
  }

  consultarOrdenes() {
    this._ordenService.getOrdenes().subscribe(data => {
      this.verOrdenenes = data;
      this.OrdenConsultada = this.verOrdenenes.filter((element: {	id_orden: string; }) => element.id_orden == this.id_Orden);

      this.formulario = this.formBuilder.group({
        // llena los campos son los de html 
       cliente_orden: [this.OrdenConsultada[0].cliente, [Validators.required]],
       direccion_orden: [this.OrdenConsultada[0].direccion, [Validators.required]],
       pago_orden: [this.OrdenConsultada[0].pago, [Validators.required]],
       estado_orden: [this.OrdenConsultada[0].estado, [Validators.required]],
       producto_orden: [this.OrdenConsultada[0].producto, [Validators.required]],
       modificadores_orden: [this.OrdenConsultada[0].modificadores, [Validators.required]],
       Sucursal_orden: [this.OrdenConsultada[0].sucursal, [Validators.required]]
      });
    });
  }


  actualizarOrden() {
    this.ordenFinal = {
      // aqui guardo basa de datos igual a la base de datos
      id_orden: this.OrdenConsultada[0].id_Orden,
      cliente: this.formulario.value.cliente_orden,
      direccion:this.formulario.value.direccion_orden,
      pago: this.formulario.value.pago_orden,
      estado: this.formulario.value.estado_orden,
      producto:this.formulario.value.producto_orden,
      modificadores:this.formulario.value.modificadores_orden,
      sucursal:this.formulario.value.Sucursal_orden
    };
    console.log(this.ordenFinal);
    this._ordenService.updateVerOrdenes(this.ordenFinal).subscribe(data => {
      this.ordenFinal = data;
      console.log(this.ordenFinal);
      if (Object.keys(this.ordenFinal).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'esta orden fue actualizada';
      } else if (this.ordenFinal === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La orden se actualizo con exito';
        this.redirectTo('/sucursal/inicio-sucursal/ordenes');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La orden no se pudo editar, intentalo de nuevo';
      }
    })

  }

  redirectTo(uri: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([uri]));
  }

}
