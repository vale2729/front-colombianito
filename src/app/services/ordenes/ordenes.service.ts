import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Orden } from 'src/app/interfaces/Orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
 ruta = (environment.api)+'ordenes1';

  constructor(private http:HttpClient) { }

  getOrdenes() : Observable<Orden>{
    return this.http.get<Orden>(this.ruta);
  }
}
