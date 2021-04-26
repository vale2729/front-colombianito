import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _sucursalService : SucursalService) {

  }

  ngOnInit(): void {
  }

  insertar() {
    this.sucursal = {
      codigo: this.codigo,
      nombre_sucursal: this.nombre,
      ciudad: this.ciudad,
      direccion: this.direccion,
      telefono: this.telefono,
      celular: this.celular,
    };

    this._sucursalService.setSucursal(this.sucursal).subscribe(data => {
      this.sucursal = data;
      console.log(this.sucursal);
      if (Object.keys(this.sucursal).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La sucursal se creo con exito';

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La sucursal no se pudo registrar, intentalo de nuevo';
      }
    })
    console.log(this.sucursal);

  }

}


