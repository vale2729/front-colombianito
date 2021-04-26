import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _usuariosService: UsuariosService) {

  }

  ngOnInit(): void {
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

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El usuario no se pudo registrar, intentalo de nuevo';
      }
    })
    console.log(this.user);

  }

}