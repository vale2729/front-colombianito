import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { ModalComponent } from '../modal/modal.component';



@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})
export class RegistroAdminComponent implements OnInit {
  cedula: string = '';
  usuario: string = '';
  clave: string = '';
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  correo: string = '';
  direccion: string = '';
  user: any = {};

  constructor(private _usuariosService: UsuariosService, public activeModal: NgbActiveModal, private modalService: NgbModal,
    private ruta: Router) {
  }


  ngOnInit(): void {
  }

  insertar() {
    this.user = {  
      usuario: this.usuario,
      clave: this.clave,
      nombre: this.nombre,
      apellidos: this.apellido,
      cedula: this.cedula,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion
    };

    this._usuariosService.setUsuarioAdmin(this.user).subscribe(data => {
      this.user = data;
      console.log(this.user);
      if (Object.keys(this.user).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El usuario administrador se creo con exito';
        this.redirectTo('admin/inicio-admin/registroAdmin');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El usuario administrador no se pudo registrar, intentalo de nuevo';
      }
    })
    console.log(this.user);

  }

  redirectTo(url: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([url]));
  }

}
