import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.scss']
})
export class EditarAdminComponent implements OnInit {

  id_usuario: string = '';
  cedula: string = '';
  usuario: string = '';
  clave: string = '';
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  correo: string = '';
  direccion: string = '';
  user: any = [];
  usuarios: any = [];

  componentRef: any;
  usuarioConsultado: any = [];
  
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _usuariosService: UsuariosService,
    private ruta: Router) { }

  ngOnInit(): void {
    this._usuariosService.getUserAdmin().subscribe(data => {
      this.usuarios = data;
      console.log(this.usuarios);
      this.usuarioConsultado = this.usuarios.filter((element: { id_usuario: string; }) =>
        element.id_usuario === this.id_usuario);
      console.log(this.usuarioConsultado);
    });
  }

  editar() {
    this.user = {
      id_usuario: this.usuarioConsultado.id_usuario,
      cedula: this.cedula,
      usuario: this.usuario,
      clave: this.clave,
      nombre: this.nombre,
      apellidos: this.apellido,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion,
    };

    this._usuariosService.updateUsuarioSucursal(this.user).subscribe(data => {
      this.user = data;
      console.log(this.user);
      if (Object.keys(this.user).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El usuario superadministrador se edito con exito';
        this.redirectTo('admin/inicio-admin/registroAdmin');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El usuario superadministrador no se pudo editar, intentalo de nuevo';
      }
    })

  }

  redirectTo(uri: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([uri]));
  }

}
