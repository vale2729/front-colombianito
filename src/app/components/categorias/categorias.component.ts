import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { RegistroCategoriaComponent } from '../registro-categoria/registro-categoria.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = 0;
  categorias : any = [];
  item : number = 0;

  constructor(private _categoriaService : CategoriasService, private modalService: NgbModal ) {
    this.refreshCategorias();
  }

  refreshCategorias() {
    this.categorias
      .map((categoria:any, i:any) => ({id: i + 1, ...categoria}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this._categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
      this.collectionSize = this.categorias.length;
      console.log(this.categorias);
    })
  }

  registroCategoria(){
    const modal = this.modalService.open(RegistroCategoriaComponent, { size: 'md'});
    modal.componentInstance.name = 'vale';
  }

}

