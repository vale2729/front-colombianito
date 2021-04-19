import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ruta = (environment.api)+'login';

  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post(this.ruta, user);
  }

}
