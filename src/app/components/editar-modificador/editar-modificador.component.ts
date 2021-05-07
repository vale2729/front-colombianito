import { Component, OnInit } from '@angular/core';
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
  modificador: string = '';
  producto: string = '';
  modificador1: any = [];
  modificadores: any = [];
  productos: any = [];
  componentRef: any;
  modificadorConsultado: any = [];

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _modificadorService: ModificadoresService,
    private ruta: Router, private _productoService: ProductosService) { }

  ngOnInit(): void {
    this._modificadorService.getModificador().subscribe(data => {
      this.modificadores = data;
      this.modificadorConsultado = this.modificadores.filter((element: { id_modificador: string; }) =>
        element.id_modificador === this.id_modificador);
    });
    this._productoService.getProductos().subscribe(data => {
      this.productos = data;
    })
  }

  editar() {
    this.modificador1 = {
      id_modificador: this.modificadorConsultado.id_modificador,
      modificador: this.modificador,
      producto: this.producto
    };

    this._modificadorService.updateModificador(this.modificador1).subscribe(data => {
      this.modificador1 = data;
      console.log(this.modificador1);
      if (Object.keys(this.modificador1).length > 0) {
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
