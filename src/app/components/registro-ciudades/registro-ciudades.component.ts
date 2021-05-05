import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-registro-ciudades',
  templateUrl: './registro-ciudades.component.html',
  styleUrls: ['./registro-ciudades.component.scss']
})
export class RegistroCiudadesComponent implements OnInit {

  codigo: string = '';
  departamento: string = '';
  nombreCiudad: string = '';
  ciudad: any = {};

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _ciudadService : CiudadesService) { }

  ngOnInit(): void {
  }

  insertar() {
    this.ciudad = {
      departamento : this.departamento,
      nombre_ciudad : this.nombreCiudad
    };

    this._ciudadService.setCiudad(this.ciudad).subscribe(data => {
      this.ciudad = data;
      console.log(this.ciudad);
      if (this.ciudad === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'Esta ciudad ya se encuentra registrada';
      }else if (Object.keys(this.ciudad).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La ciudad se creo con exito';

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La ciudad no se pudo registrar, intentalo de nuevo';
      }
    })

  }

}
