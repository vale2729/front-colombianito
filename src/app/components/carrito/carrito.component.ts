import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  @Input() nombre = {};
  @Input() precio = {};
  
  constructor(public activeModal : NgbActiveModal, private ruta : Router) { }

  ngOnInit(): void {
    
  }

  pagar(){
    this.activeModal.close();
    this.ruta.navigate(['ch/menu/pago']);
  }

}
