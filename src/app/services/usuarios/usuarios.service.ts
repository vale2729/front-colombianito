import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { Registroadmin } from 'src/app/interfaces/Registroadmin';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  ruta = (environment.api)+'users';

  constructor(private http:HttpClient) {

  }

  insertar(user:any){
    return this.http.post(this.ruta, user);
  }

  getRegistroadmin() : Observable<Registroadmin>{
    return this.http.get<Registroadmin>(this.ruta);
  }
}
