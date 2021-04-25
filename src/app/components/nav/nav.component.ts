import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'src/app/interfaces/producto';
import { LoginService } from 'src/app/services/login/login.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  
  constructor(private title: Title, private log : LoginService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.title.setTitle('El colombianito');
  }

  carrito(){

    const modal = this.modalService.open(CarritoComponent, { size: 'xl'});
    modal.componentInstance.nombre = 'Hamburguesa';
    modal.componentInstance.precio = '12.000';
  }

}
