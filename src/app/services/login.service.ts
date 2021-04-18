import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ruta = environment.api;

  constructor(private http:HttpClient) { }

  login(){
    return this.http.get(this.ruta);
  }

}
