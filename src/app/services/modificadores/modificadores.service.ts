import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Modificador } from 'src/app/interfaces/modificador';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ModificadoresService {

  ruta = (environment.api) + 'getModificadores';
  rutaSetModificador = (environment.api) + 'setModificador';
  rutaUpdateModificador = (environment.api) + 'updateModificador';
  rutaDeleteModificador = (environment.api) + 'deleteModificador';

  constructor(private http: HttpClient) { }

  getModificador(): Observable<Modificador>{
    return this.http.get<Modificador>(this.ruta);
  }

  setModificador(modificador: any) {
    return this.http.post(this.rutaSetModificador, modificador);
  }

  updateModificador(modificador: any) {
    return this.http.post(this.rutaUpdateModificador, modificador);
  }

  deleteModificador(modificador: any) {
    return this.http.post(this.rutaDeleteModificador, modificador);
  }
}
