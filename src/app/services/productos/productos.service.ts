import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  ruta = (environment.api)+'producto';

  constructor(private http:HttpClient) { }

  getproductos(){
    return this.http.get(this.ruta);
  }
}
