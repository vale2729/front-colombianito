import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-registro-ciudades',
  templateUrl: './registro-ciudades.component.html',
  styleUrls: ['./registro-ciudades.component.scss']
})
export class RegistroCiudadesComponent implements OnInit {


  ciudad: any = [];
  componentRef: any;

  formulario : FormGroup;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _ciudadService: CiudadesService,
    private ruta: Router, private formBuilder : FormBuilder) {
      this.formulario = new FormGroup({});
      this.crearFormulario();
     }

  ngOnInit(): void {
   
  }

  crearFormulario(){
    this.formulario = this.formBuilder.group({
      departamento : ['',[Validators.required]],
      ciudad : ['',[Validators.required]]
    })
  }

  insertar() {
    this.ciudad = {
      departamento: this.formulario.value.departamento,
      nombre_ciudad: this.formulario.value.ciudad
    };

    this._ciudadService.setCiudad(this.ciudad).subscribe(data => {
      this.ciudad = data;
      console.log(this.ciudad);
      if (this.ciudad === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'Esta ciudad ya se encuentra registrada';
      } else if (Object.keys(this.ciudad).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La ciudad se creo con exito';
        this.redirectTo('admin/inicio-admin/ciudades');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La ciudad no se pudo registrar, intentalo de nuevo';
      }
    })

  }

  redirectTo(url: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([url]));
  }

}
