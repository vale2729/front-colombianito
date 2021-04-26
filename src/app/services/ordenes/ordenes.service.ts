import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Orden } from 'src/app/interfaces/orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
 ruta = (environment.api)+'getOrdenes';

  constructor(private http:HttpClient) { }

  getOrdenes() : Observable<Orden>{
    return this.http.get<Orden>(this.ruta);
  }
}
