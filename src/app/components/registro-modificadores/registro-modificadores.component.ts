import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModificadoresService } from 'src/app/services/modificadores/modificadores.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-registro-modificadores',
  templateUrl: './registro-modificadores.component.html',
  styleUrls: ['./registro-modificadores.component.scss']
})
export class RegistroModificadoresComponent implements OnInit {

  modificador: string = '';
  producto: string = '';
  modificador1: any = [];
  productos: any = [];
  componentRef: any;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _modificadorService: ModificadoresService,
    private ruta: Router, private _productoService : ProductosService) { }

  ngOnInit(): void {
    this._productoService.getProductos().subscribe(data => {
      this.productos = data;
    })
  }

  insertar() {
    this.modificador1 = {
      modificador: this.modificador,
      producto: this.producto
    };

    console.log(this.modificador1);

    this._modificadorService.setModificador(this.modificador1).subscribe(data => {
      this.modificador1 = data;
      console.log(this.modificador1);
      if (Object.keys(this.modificador1).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El modificador se creo con exito';
        this.redirectTo('admin/inicio-admin/modificadores');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El modificador no se pudo registrar, intentalo de nuevo';
      }
    })

  }

  redirectTo(url: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([url]));
  }
}
