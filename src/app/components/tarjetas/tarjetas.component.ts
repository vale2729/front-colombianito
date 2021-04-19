import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
  productos : any;
  constructor(_productoservice : ProductosService) { 
    this.productos = _productoservice.getproductos();
  }

  ngOnInit(): void {
  }

}
