import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss']
})
export class EditarCategoriaComponent implements OnInit {

  id_categoria: string = '';
  nombre_categoria: string = '';
  categoria: any = [];
  categorias: any = [];
  componentRef: any;
  categoriaConsultada: any = [];

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _categoriaService: CategoriasService,
    private ruta: Router) { }

  ngOnInit(): void {
    this._categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
      this.categoriaConsultada = this.categorias.filter((element: { id_categoria: string; }) => element.id_categoria === this.id_categoria);
    });
  }

  editar() {
    this.categoria = {
      id_categoria: this.categoriaConsultada.id_categoria,
      nombre_categoria: this.nombre_categoria
    };

    this._categoriaService.updateCategoria(this.categoria).subscribe(data => {
      this.categoria = data;
      console.log(this.categoria);
      if (Object.keys(this.categoria).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La categoria se edito con exito';
        this.redirectTo('admin/inicio-admin/categorias');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La categoria no se pudo editar, intentalo de nuevo';
      }
    })

  }

  redirectTo(uri: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([uri]));
  }

}
