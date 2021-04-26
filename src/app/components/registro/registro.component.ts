import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  cedula : string = '';
  usuario : string = '';
  clave : string = '';
  nombre : string = '';
  apellido : string = '';
  telefono : string = '';
  correo : string = '';
  direccion : string = '';
  user : any = {};

  constructor(private _userservice : UsuariosService, private ruta : Router, private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  insertar(){
    this.user = { 
      cedula: this.cedula, 
      usuario: this.usuario,
      clave: this.clave,
      nombre: this.nombre,
      apellidos: this.apellido,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion
    };
    console.log(this.user);
    if(Object.keys(this.user.cedula).length > 0 && Object.keys(this.user.usuario).length > 0 && Object.keys(this.user.clave).length
      && Object.keys(this.user.nombre).length && Object.keys(this.user.apellidos).length && Object.keys(this.user.telefono).length
      && Object.keys(this.user.correo).length && Object.keys(this.user.direccion).length){
      this._userservice.insertarUsuario(this.user).subscribe(data => {
        this.user = data;
        console.log(this.user);
        console.log(data);
        if (Object.keys(data).length > 0){
          const modal = this.modalService.open(ModalComponent);
          modal.componentInstance.name = 'El usuario se creo con exito, ya puedes ingresar con tu usuario y contraseña';
          this.ruta.navigate(['login']);
        }else{
          const modal = this.modalService.open(ModalComponent);
          modal.componentInstance.name = 'El usuario no se pudo registrar, intentalo de nuevo';
        }
      })
    }else{
      const modal = this.modalService.open(ModalComponent);
      modal.componentInstance.name = 'Debe de llenar todos los cambios';
    }
    

  }

}
