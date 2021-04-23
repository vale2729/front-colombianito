import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ciudad } from 'src/app/interfaces/ciudad';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  ruta = (environment.api)+'ciudades';

  constructor(private http:HttpClient) { }

  getCiudades() : Observable<Ciudad>{
    return this.http.get<Ciudad>(this.ruta);
  }

}