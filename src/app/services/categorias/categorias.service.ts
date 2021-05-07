import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from 'src/app/interfaces/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  ruta = (environment.api) + 'getCategorias';
  rutaSetCategoria = (environment.api) + 'setCategoria';
  rutaUpdateCategoria = (environment.api) + 'updateCategoria';
  rutaDeleteCategoria = (environment.api) + 'deleteCategoria';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria> {
    return this.http.get<Categoria>(this.ruta);
  }

  setCategoria(categoria: any) {
    return this.http.post(this.rutaSetCategoria, categoria);
  }

  updateCategoria(categoria: any) {
    return this.http.post(this.rutaUpdateCategoria, categoria);
  }

  deleteCategoria(sucursal: any) {
    return this.http.post(this.rutaDeleteCategoria, sucursal);
  }
}