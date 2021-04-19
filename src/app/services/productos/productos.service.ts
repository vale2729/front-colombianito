import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos =[
  	{
  		codigo: 'Saschis',
  		categoria: 'pitbull',
  		nombre : 'Hamburguesa',
  		descripcion : 'Rica hamburguesa de carne'
  	},
  	{
  		codigo: 'Saschis',
  		categoria: 'pitbull',
  		nombre : 'Pollo apanado',
  		descripcion : 'Pollo rico'
  	},
  	{
  		codigo: 'Saschis',
  		categoria: 'pitbull',
  		nombre : 'Bandeja paisa',
  		descripcion : 'Muchos ingredientes, muchos sabores'
  	},
  	{
  		codigo: 'Saschis',
  		categoria: 'pitbull',
  		nombre : 'Tacos',
  		descripcion : 'Ricos tacos'
  	},
  	{
  		codigo: 'Saschis',
  		categoria: 'pitbull',
  		nombre : 'Empanadas',
  		descripcion : 'Empanadas de carne, pollo, chicarron'
  	},
  	{
  		codigo: 'Saschis',
  		categoria: 'pitbull',
  		nombre : 'Pizza',
  		descripcion : 'Pizza hawaina'
  	},
	  {
      codigo: 'Saschis',
  		categoria: 'pitbull',
  		nombre : 'Arroz con pollo',
  		descripcion : 'Rico arroz con pollo'
	}
  ]
  constructor() { }

  getproductos(){
    return this.productos;
  }

}
