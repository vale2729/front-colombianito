import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  @Input() mensaje: string = '';
  @Input() id: string = '';
  @Input() tabla: string = '';
  ciudad: any = {};
  sucursal: any = {};
  categoria: any = {};

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private ruta: Router,
    private _ciudadService: CiudadesService, private _sucursalService: SucursalService,
    private _categoriaService : CategoriasService) { }

  ngOnInit(): void {
  }

  eliminar() {   

    if (this.tabla === 'ciudades') {
      this.ciudad = { id_ciudad: this.id };
      this._ciudadService.deleteCiudad(this.ciudad).subscribe(data => {
        this.modalMensaje(data, 'ciudades');
      });
    }else if (this.tabla === 'sucursales'){
      this.sucursal = { id_sucursal: this.id };
      this._sucursalService.deleteSucursal(this.sucursal).subscribe(data => {
        this.modalMensaje(data, 'sucursales');
      });
    }else if (this.tabla === 'categorias') {
      this.categoria = { id_categoria: this.id };
      this._categoriaService.deleteCategoria(this.categoria).subscribe(data => {
        this.modalMensaje(data, 'categorias');
      })
    }

  }

  modalMensaje(data: any, ruta: string){
    if (data === 1) {
      this.activeModal.close();
      const modal = this.modalService.open(ModalComponent);
      modal.componentInstance.name = 'El item se elimino con exito';
      this.redirectTo('admin/inicio-admin/'+ruta);
    }else{
      this.activeModal.close();
      const modal = this.modalService.open(ModalComponent);
      modal.componentInstance.name = 'El item no se elimino, intentelo de nuevo';
    }
  }

  redirectTo(url: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([url]));
  }

}
