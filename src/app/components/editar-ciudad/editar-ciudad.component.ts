import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.scss']
})
export class EditarCiudadComponent implements OnInit {

  id_ciudad: string = '';
  ciudad: any = [];
  ciudades: any = [];
  componentRef: any;
  ciudadConsultada: any = [];

  formulario : FormGroup;
  

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _ciudadService: CiudadesService,
    private ruta: Router, private formBuilder: FormBuilder) {
    this.formulario = new FormGroup({});
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.consultarCiudad();
  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
      departamento : ['', [Validators.required]],
      ciudad : ['',[Validators.required]]
    });
  }

  consultarCiudad() {
    this._ciudadService.getCiudades().subscribe(data => {
      this.ciudades = data;
      this.ciudadConsultada = this.ciudades.filter((element: { id_ciudad: string; }) => element.id_ciudad === this.id_ciudad);

      this.formulario = this.formBuilder.group({
        departamento: [this.ciudadConsultada[0].departamento, [Validators.required]],
        ciudad: [this.ciudadConsultada[0].nombre_ciudad, [Validators.required]]
      });

    });
  }


  editar() {
    this.ciudad = {
      id_ciudad: this.ciudadConsultada[0].id_ciudad,
      departamento: this.formulario.value.departamento,
      nombre_ciudad: this.formulario.value.ciudad
    };
    console.log(this.ciudad);
    this._ciudadService.updateCiudad(this.ciudad).subscribe(data => {
      this.ciudad = data;
      console.log(this.ciudad);
      if (Object.keys(this.ciudad).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'Esta ciudad ya se encuentra registrada';
      } else if (this.ciudad === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La ciudad se edito con exito';
        this.redirectTo('admin/inicio-admin/ciudades');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La ciudad no se pudo editar, intentalo de nuevo';
      }
    })

  }

  redirectTo(uri: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([uri]));
  }

}
