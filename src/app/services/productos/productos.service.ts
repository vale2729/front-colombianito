import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  ruta = (environment.api)+'producto';

  constructor(private http:HttpClient) { }

  getproductos() : Observable<Producto>{
    return this.http.get<Producto>(this.ruta);
  }
}
