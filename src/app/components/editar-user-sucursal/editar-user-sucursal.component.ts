import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  user: any = [];
  usuarios: any = [];
  sucursales: any = [];

  componentRef: any;
  usuarioConsultado: any = [];

  formulario: FormGroup;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _usuariosService: UsuariosService,
    private ruta: Router, private _sucursalService: SucursalService, private formBuilder: FormBuilder) {
    this.formulario = new FormGroup({});
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.consultarUser();
  }

  crearFormulario() {
    this.formulario = this.formBuilder.group({
      cedula: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      clave: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      sucursal: ['', [Validators.required]]
    })
  }

  consultarUser() {
    this._usuariosService.getUserSucursal().subscribe(data => {
      this.usuarios = data;
      this.usuarioConsultado = this.usuarios.filter((element: { id_administrador: string; }) =>
        element.id_administrador === this.id_administrador);
      console.log(this.usuarioConsultado);

      this.formulario = this.formBuilder.group({
        cedula: [this.usuarioConsultado[0].cedula, [Validators.required]],
        usuario: [this.usuarioConsultado[0].usuario, [Validators.required]],
        clave: [this.usuarioConsultado[0].clave, [Validators.required]],
        nombre: [this.usuarioConsultado[0].nombre, [Validators.required]],
        apellidos: [this.usuarioConsultado[0].apellidos, [Validators.required]],
        telefono: [this.usuarioConsultado[0].telefono, [Validators.required]],
        correo: [this.usuarioConsultado[0].correo, [Validators.required]],
        direccion: [this.usuarioConsultado[0].direccion, [Validators.required]],
        sucursal: [this.usuarioConsultado[0].sucursal, [Validators.required]]
      })
    });

    this._sucursalService.getSucursales().subscribe(data => {
      this.sucursales = data;
    })
  }

  editar() {
    this.user = {
      id_administrador: this.usuarioConsultado[0].id_administrador,
      cedula: this.formulario.value.cedula,
      usuario: this.formulario.value.usuario,
      clave: this.formulario.value.clave,
      nombre: this.formulario.value.nombre,
      apellidos: this.formulario.value.apellidos,
      telefono: this.formulario.value.telefono,
      correo: this.formulario.value.correo,
      direccion: this.formulario.value.direccion,
      sucursal: this.formulario.value.sucursal
    };

    console.log(this.user);

    this._usuariosService.updateUsuarioSucursal(this.user).subscribe(data => {
      this.user = data;
      console.log(this.user);
      if (this.user === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'El administrador de sucursal se edito con exito';
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
