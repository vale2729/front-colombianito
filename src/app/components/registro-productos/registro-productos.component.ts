import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias/categorias.service';

@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.scss']
})
export class RegistroProductosComponent implements OnInit {

  categorias : any= [];

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _categoriaService : CategoriasService) { }

  ngOnInit(): void {
    this._categoriaService.getCategorias().subscribe(data => {
      this.categorias=data;
    })
  }

}
