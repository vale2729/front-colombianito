import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productosAdd : any = [];

  ruta = (environment.api)+'getProductos';
  //esta ruta esta ruta es del back debe de ser igual, es de la ruta del api
  rutaSetProducto = (environment.api)+'setProductos';
  rutDeleteProductos = (environment.api)+'deleteProductos';

  constructor(private http:HttpClient) { }


  getProductos() : Observable<Producto>{
    return this.http.get<Producto>(this.ruta);
  }

  setProducto(producto: any) {
    return this.http.post(this.rutaSetProducto, producto);
  }
  deleteProductos(producto: any) {
    return this.http.post(this.rutDeleteProductos, producto);
  }


  getProductosAdd(){
    return this.productosAdd;
  }
  setProductosAdd(productos : any){
    this.productosAdd = productos;
  }

}
