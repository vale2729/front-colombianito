import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
  productos : any = [];
  
  constructor(private _productoservice : ProductosService) {  
  }

  ngOnInit(): void {
    this._productoservice.getproductos().subscribe(data => {
      this.productos = data
    })
  }

}
