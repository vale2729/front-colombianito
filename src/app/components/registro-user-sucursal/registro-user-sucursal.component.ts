import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-registro-sucursales',
  templateUrl: './registro-user-sucursal.component.html',
  styleUrls: ['./registro-user-sucursal.component.scss']
})
export class RegistroUserSucursalComponent implements OnInit {
  @Input() name: string = '';
  cedula: string = '';
  usuario: string = '';
  clave: string = '';
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';
  correo: string = '';
  direccion: string = '';
  sucursal: string = '';
  user: any = {};
  sucursales: any = {};

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _usuariosService: UsuariosService,
    private _sucursalService: SucursalService, private ruta: Router) {

  }

  ngOnInit(): void {
    this._sucursalService.getSucursales().subscribe(data => {
      this.sucursales = data;
    })
  }

  insertar() {
    this.user = {
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

    this._usuariosService.setUsuarioSucursal(this.user).subscribe(data => {
      this.user = data;
      console.log(this.user);
      if (Object.keys(this.user).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El usuario para la sucursal se creo con exito';
        this.redirectTo('admin/inicio-admin/registroSucursales');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El usuario no se pudo registrar, intentalo de nuevo';
      }
    })
    console.log(this.user);

  }

  redirectTo(url: string) {
    this.ruta.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.ruta.navigate([url]));
  }

}