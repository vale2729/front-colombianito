import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-registro-categoria',
  templateUrl: './registro-categoria.component.html',
  styleUrls: ['./registro-categoria.component.scss']
})
export class RegistroCategoriaComponent implements OnInit {
  codigo: string = '';
  nombre: string = '';
  categoria: any = {};

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _categoriaService : CategoriasService) { }

  ngOnInit(): void {
  }

  insertar() {
    this.categoria = {
      codigo : this.codigo,
      nombre : this.nombre
    };

    this._categoriaService.setCategoria(this.categoria).subscribe(data => {
      this.categoria = data;
      console.log(this.categoria);
      if (Object.keys(this.categoria).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La categoria se creo con exito';

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La categoria no se pudo registrar, intentalo de nuevo';
      }
    })

  }

}