import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  departamento: string = '';
  nombreCiudad: string = '';
  ciudad: any = [];
  ciudades: any = [];
  componentRef: any;
  ciudadConsultada:any = [];

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _ciudadService : CiudadesService,
    private ruta : Router) { }

  ngOnInit(): void {
    this._ciudadService.getCiudades().subscribe(data => {
      this.ciudades = data;
      this.ciudadConsultada=this.ciudades.filter((element: { id_ciudad: string; }) => element.id_ciudad === this.id_ciudad);
    });
  }


  editar() {
    this.ciudad = {
      id_ciudad: this.ciudadConsultada.id_ciudad,
      departamento : this.departamento,
      nombre_ciudad : this.nombreCiudad
    };

    this._ciudadService.updateCiudad(this.ciudad).subscribe(data => {
      this.ciudad = data;
      console.log(this.ciudad);
      if (this.ciudad === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'Esta ciudad ya se encuentra registrada';
      }else if (Object.keys(this.ciudad).length > 0) {
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

  redirectTo(uri:string){
    this.ruta.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.ruta.navigate([uri]));
 }

}
