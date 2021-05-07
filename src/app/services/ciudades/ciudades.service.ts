import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ciudad } from 'src/app/interfaces/ciudad';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  ruta = (environment.api)+'getCiudades';
  rutaSetCiudad = (environment.api)+'setCiudad';
  rutaUpdateCiudad = (environment.api)+'updateCiudad';
  rutaDeleteCiudad = (environment.api)+'deleteCiudad';

  constructor(private http:HttpClient) { }

  getCiudades() : Observable<Ciudad>{
    return this.http.get<Ciudad>(this.ruta);
  }

  setCiudad(ciudad: any) {
    return this.http.post(this.rutaSetCiudad, ciudad);
  }

  updateCiudad(ciudad: any) {
    return this.http.post(this.rutaUpdateCiudad, ciudad);
  }

  deleteCiudad(ciudad: any) {
    return this.http.post(this.rutaDeleteCiudad, ciudad);
  }



}
