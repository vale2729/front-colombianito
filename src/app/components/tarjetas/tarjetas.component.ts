import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
  productos :any = [];
  
  constructor(private _productoservice : ProductosService) { 
    this.productos = _productoservice.getproductos();
  }

  ngOnInit(): void {
    this._productoservice.getproductos().subscribe(console.log)
  }

}
