import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from '../nav/nav.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  images = [`ComidaCarrucel1.jpg`, `ComidaCarrucel2.jpeg`, `ComidaCarrucel3.jpg`].map((n) => `/assets/Carrucel/${n}`);
  
  constructor(config: NgbCarouselConfig, private ruta : Router) {
    config.interval = 1000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit(): void {
    console.log('holi');
    this.ruta.navigate(['']);
  }
  
}
