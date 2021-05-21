import { Component, HostBinding, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/login/login.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  signedIn: boolean | undefined;
  

  constructor(private title: Title, private _login: LoginService, private modalService: NgbModal,
    public ruta: Router) {
  }

  ngOnInit(): void {
    this.iniciar();
  }

  iniciar(){
    this.title.setTitle('El colombianito');
    this._login.getLoggedInName.subscribe(name => this.changeName(name));
    if (this._login.isLoggedIn()) {
      this.signedIn = true;
    }
    else {
      this.signedIn = false;
    }
  }


  carrito() {
    const modal = this.modalService.open(CarritoComponent, { size: 'xl' });
    modal.componentInstance.nombre = 'Hamburguesa';
    modal.componentInstance.precio = '12.000';
  }

  private changeName(name: boolean): void {
    this.signedIn = name;
    this.signedIn = !name;
  }

  logout() {
    this._login.deleteToken();
    window.location.href = "/";
  }


}
