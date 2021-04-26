import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Sucursales } from 'src/app/interfaces/sucursales';



@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  ruta = (environment.api)+'getSucursales';
  rutaSetSucursal = (environment.api)+'setSucursal';

  constructor(private http:HttpClient) { }

  getSucursales() : Observable<Sucursales>{
    return this.http.get<Sucursales>(this.ruta);
  }

  setSucursal(sucursal: any) {
    return this.http.post(this.rutaSetSucursal, sucursal);
  }
}
