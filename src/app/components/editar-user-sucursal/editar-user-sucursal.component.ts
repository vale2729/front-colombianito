import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-editar-user-sucursal',
  templateUrl: './editar-user-sucursal.component.html',
  styleUrls: ['./editar-user-sucursal.component.scss']
})
export class EditarUserSucursalComponent implements OnInit {

  id_administrador: string = '';
  cedula: string = '';
  usuario: string = '';
  clave: string = '';
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  correo: string = '';
  direccion: string = '';
  sucursal: string = '';
  user: any = [];
  usuarios: any = [];
  sucursales: any = [];

  componentRef: any;
  usuarioConsultado: any = [];


  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _usuariosService: UsuariosService,
    private ruta: Router, private _sucursalService: SucursalService) { }

  ngOnInit(): void {
    this._usuariosService.getUserSucursal().subscribe(data => {
      this.usuarios = data;
      this.usuarioConsultado = this.usuarios.filter((element: { id_administrador: string; }) =>
        element.id_administrador === this.id_administrador);
      console.log(this.usuarioConsultado);
    });

    this._sucursalService.getSucursales().subscribe(data => {
      this.sucursales = data;
    })
  }

  editar() {
    this.user = {
      id_administrador: this.usuarioConsultado.id_administrador,
      cedula: this.cedula,
      usuario: this.usuario,
      clave: this.clave,
      nombre: this.nombre,
      apellidos: this.apellido,
      telefono: this.telefono,
      correo: this.correo,
      direccion: this.direccion,
      sucursal: this.sucursal
    };

    this._usuariosService.updateUsuarioSucursal(this.user).subscribe(data => {
      this.user = data;
      console.log(this.user);
      if (Object.keys(this.user).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El administrador de sucursal se edito con exito';
        //this.ruta.navigate(['admin/inicio-admin/ciudades']);
        this.redirectTo('admin/inicio-admin/registroSucursales');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El administrador de sucursal no se pudo editar, intentalo de nuevo';
      }
    })

  }

  redirectTo(uri: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([uri]));
  }

}
