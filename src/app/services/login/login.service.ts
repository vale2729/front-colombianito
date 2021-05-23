import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  redirectUrl: string = '';
  idSucursal : string = '';

  ruta = (environment.api) + 'login';
  rutaAdmin = (environment.api) + 'loginAdmin';
  rutaSucursal = (environment.api) + 'loginSucursal';

  rutaLogin = (environment.api) + 'login';
  rutaLogout = (environment.api) + 'logout'

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post(this.ruta, user);
  }

  loginAdmin(user: any) {
    return this.http.post(this.rutaAdmin, user);
  }

  loginSucursal(user: any) {
    return this.http.post(this.rutaSucursal, user);
  }

  public userLoginAdmin(user: any) {
    return this.http.post<any>(this.rutaAdmin, user).subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.setToken(data[0].id_usuario);
        this.getLoggedInName.emit(true);
        console.log(this.getLoggedInName);
        return true;
      }else{
        return false;
      }
    })
  }

  public userLoginSucursal(user: any) {
    return this.http.post<any>(this.rutaSucursal, user).subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.idSucursal = data[0].id_administrador;
        this.setToken(data[0].id_administrador);
        this.getLoggedInName.emit(true);
        console.log(this.getLoggedInName);
        return true;
      }else{
        return false;
      }
    })
  }

  public userlogin(user: any) {
    return this.http.post<any>(this.ruta, user).subscribe(data => {
      if (Object.keys(data).length > 0) {
        this.setToken(data[0].id_usuario);
        this.getLoggedInName.emit(true);
        console.log(this.getLoggedInName);
        return true;
      }else{
        return false;
      }
    },error => { alert(error) })

  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}
