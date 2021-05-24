import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModificadoresService } from 'src/app/services/modificadores/modificadores.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-producto-modificador',
  templateUrl: './producto-modificador.component.html',
  styleUrls: ['./producto-modificador.component.scss']
})
export class ProductoModificadorComponent implements OnInit {

  productosAdd : any = [];
  modificadores : any=[];

  id : number = 0;
  nombre : string = '';
  precio : number = 0;
  foto : string = '';
  modificador : FormControl;
  modificadorConsultado : any=[];

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal, private _modificadorService : ModificadoresService,
    private _productoservice: ProductosService) { 
      this.modificador = new FormControl();
    }

  ngOnInit(): void {
    this._modificadorService.getModificador().subscribe(data => {
      this.modificadores = data;
      this.modificadorConsultado = this.modificadores.filter((element: { producto: number; }) =>element.producto === this.id);
    })
  }

  agregarCarrito(){

    this.productosAdd = this._productoservice.getProductosAdd();
    this.productosAdd.push({
      id_producto : this.id,
      nombre: this.nombre,
      precio: this.precio,
      img: this.foto,
      modificadores : this.modificador.value
    });

    this._productoservice.setProductosAdd(this.productosAdd);

    this.activeModal.close();
    const modal = this.modalService.open(CarritoComponent, { size: 'xl'});
    //modal.componentInstance.productosAdd = this.productosAdd;
  }

}
