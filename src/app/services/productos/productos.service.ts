import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  ruta = (environment.api)+'getProductos';
  //esta ruta esta ruta es del back debe de ser igual, es de la ruta del api
  rutaSetProducto = (environment.api)+'setProductos';

  constructor(private http:HttpClient) { }


  getProductos() : Observable<Producto>{
    return this.http.get<Producto>(this.ruta);
  }

  setProductos(producto: any) {
    return this.http.post(this.rutaSetProducto, producto);
  }

}
