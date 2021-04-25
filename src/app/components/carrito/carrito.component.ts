import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  @Input() nombre = {};
  @Input() precio = {};
  
  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
    
  }

}
