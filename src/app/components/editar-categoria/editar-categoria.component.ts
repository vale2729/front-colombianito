import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  categoria: any = [];
  categorias: any = [];
  componentRef: any;
  categoriaConsultada: any = [];

  formulario : FormGroup;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _categoriaService: CategoriasService,
    private ruta: Router, private formBuilder : FormBuilder) {
      this.formulario = new FormGroup({});
      this.crearFormulario();
     }

  ngOnInit(): void {
    this.consultarCategoria();
  }

  crearFormulario(){
    this.formulario = this.formBuilder.group({
      categoria : ['',[Validators.required]],
    })
  }

  consultarCategoria(){
    this._categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
      this.categoriaConsultada = this.categorias.filter((element: { id_categoria: string; }) => element.id_categoria === this.id_categoria);
    
      this.formulario = this.formBuilder.group({
        categoria : [this.categoriaConsultada[0].nombre_categoria,[Validators.required]]
      })
    });
  }

  editar() {
    this.categoria = {
      id_categoria: this.categoriaConsultada[0].id_categoria,
      nombre_categoria: this.formulario.value.categoria
    };

    this._categoriaService.updateCategoria(this.categoria).subscribe(data => {
      this.categoria = data;
      if (this.categoria === 1) {
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
