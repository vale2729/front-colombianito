import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categoria : number = 0;
  categorias : any = [];

  constructor(private _categoriaService : CategoriasService) { }

  ngOnInit(): void {
    this._categoriaService.getCategorias().subscribe(data => {
      this.categorias = data;
    })
  }

  cambiar(id : number){
    this.categoria = id;
  }
  

}
