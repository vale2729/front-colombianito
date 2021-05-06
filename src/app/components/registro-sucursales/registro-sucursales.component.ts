import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-registro-sucursales',
  templateUrl: './registro-sucursales.component.html',
  styleUrls: ['./registro-sucursales.component.scss']
})
export class RegistroSucursalesComponent implements OnInit {
  @Input() name: string = '';
  codigo: string = '';
  nombre: string = '';
  ciudad: string = '';
  direccion: string = '';
  telefono: string = '';
  celular: string = '';
  sucursal: any = {};
  ciudades: any = [];

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _sucursalService: SucursalService,
    private _ciudadService: CiudadesService, private ruta : Router) {

  }

  ngOnInit(): void {
    this._ciudadService.getCiudades().subscribe(data => {
      this.ciudades = data;
    })
  }

  insertar() {
    this.sucursal = {
      nombre_sucursal: this.nombre,
      ciudad: this.ciudad,
      direccion: this.direccion,
      telefono: this.telefono,
      celular: this.celular,
    };

    this._sucursalService.setSucursal(this.sucursal).subscribe(data => {
      this.sucursal = data;
      console.log(this.sucursal);
      if (this.sucursal === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'Solo se puede registrar una sucursal por ciudad';
      }else if (Object.keys(this.sucursal).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La sucursal se creo con exito';
        this.redirectTo('admin/inicio-admin/sucursales');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La sucursal no se pudo registrar, intentalo de nuevo';
      }
    })

  }

  redirectTo(url:string){
    this.ruta.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.ruta.navigate([url]));
 }

}


