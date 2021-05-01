import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'app-modificadores',
  templateUrl: './modificadores.component.html',
  styleUrls: ['./modificadores.component.scss']
})
export class ModificadoresComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = 0;
  categorias : any = [];
  item : number = 0;

  constructor(private _categoriaService : CategoriasService) {
    this.refreshCategorias();
   }

  ngOnInit() {
    this._categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
      this.collectionSize = this.categorias.length;
      console.log(this.categorias);
    })
  }

  refreshCategorias() {
    this.categorias
      .map((categoria:any, i:any) => ({id: i + 1, ...categoria}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
