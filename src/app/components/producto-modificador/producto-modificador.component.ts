import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-producto-modificador',
  templateUrl: './producto-modificador.component.html',
  styleUrls: ['./producto-modificador.component.scss']
})
export class ProductoModificadorComponent implements OnInit {

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  agregarCarrito(){
    this.activeModal.close();
    const modal = this.modalService.open(CarritoComponent, { size: 'xl'});
    //modal.componentInstance.productosAdd = this.productosAdd;
  }

}
