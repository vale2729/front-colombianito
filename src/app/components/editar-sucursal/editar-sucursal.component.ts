import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.scss']
})
export class EditarSucursalComponent implements OnInit {

  id_sucursal: string = '';
  nombre: string = '';
  ciudad: string = '';
  direccion: string = '';
  telefono: string = '';
  celular: string = '';
  sucursal: any = [];
  sucursales: any = [];
  ciudades: any = [];
  componentRef: any;
  sucursalConsultada:any = [];
  
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _sucursalService : SucursalService,
    private _ciudadService: CiudadesService, private ruta : Router) { }

  ngOnInit(): void {
    this._sucursalService.getSucursales().subscribe(data => {
      this.sucursales = data;
      this.sucursalConsultada=this.sucursales.filter((element: { id_sucursal: string; }) => element.id_sucursal === this.id_sucursal);
    });
    this._ciudadService.getCiudades().subscribe(data => {
      this.ciudades = data;
    });
  }

  editar() {
    this.sucursal = {
      id_sucursal: this.sucursalConsultada.id_sucursal,
      nombre_sucursal: this.nombre,
      ciudad: this.ciudad,
      direccion: this.direccion,
      telefono: this.telefono,
      celular: this.celular,
    };

    this._sucursalService.updateSucursal(this.sucursal).subscribe(data => {
      this.sucursal = data;
      console.log(this.sucursal);
      if (this.sucursal === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'Ya se encuentra una sucursal registrada en esta ciudad, cambia de ciudad';
      }else if (Object.keys(this.sucursal).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La ciudad se edito con exito';
        this.redirectTo('admin/inicio-admin/sucursales');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La sucursal no se pudo editar, intentalo de nuevo';
      }
    })

  }

  redirectTo(uri:string){
    this.ruta.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.ruta.navigate([uri]));
 }

}
