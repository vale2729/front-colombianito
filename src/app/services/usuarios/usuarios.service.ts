import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs/internal/Observable';
import { UsuarioAdmin } from 'src/app/interfaces/usuario-admin';
import { UsuarioSucursal } from 'src/app/interfaces/usuario-sucursal';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  ruta = (environment.api)+'users';

  rutaAdmin = (environment.api)+'getUsersAdmin';
  rutaSetAdmin = (environment.api)+'setUserAdmin';
  rutaUpdateUsuarioAdmin = (environment.api)+'updateUserAdmin';

  rutaSucursal = (environment.api)+'getUsersSucursal';
  rutaSetSucursal = (environment.api)+'setUserSucursal';
  rutaUpdateUsuarioSucursal = (environment.api)+'updateUserSucursal';
  
  constructor(private http:HttpClient) {

  }

  insertarUsuario(user:any){
    return this.http.post(this.ruta, user);
  }


  getUserAdmin() : Observable<UsuarioAdmin>{
    return this.http.get<UsuarioAdmin>(this.rutaAdmin);
  }
  setUsuarioAdmin(user:any){
    return this.http.post(this.rutaSetAdmin, user);
  }
  updateUsuarioAdmin(user: any) {
    return this.http.post(this.rutaUpdateUsuarioAdmin, user);
  }


  getUserSucursal() : Observable<UsuarioSucursal>{
    return this.http.get<UsuarioSucursal>(this.rutaSucursal);
  }
  setUsuarioSucursal(user:any){
    return this.http.post(this.rutaSetSucursal, user);
  }
  updateUsuarioSucursal(user: any) {
    return this.http.post(this.rutaUpdateUsuarioSucursal, user);
  }
}
