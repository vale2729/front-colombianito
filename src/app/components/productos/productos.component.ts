import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = 0;
  productos : any = [];
  item : number = 0;

  constructor(private _productoservice: ProductosService) {
    this.refreshProductos();
  }

  refreshProductos() {
    this.productos
      .map((producto:any, i:any) => ({id: i + 1, ...producto}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this._productoservice.getproductos().subscribe(data => {
      this.productos = data;
      this.collectionSize = this.productos.length;
      console.log(this.productos);
    })
  }

}
