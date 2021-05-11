import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  user: any = [];
  usuarios: any = [];

  componentRef: any;
  usuarioConsultado: any = [];

  formulario: FormGroup;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _usuariosService: UsuariosService,
    private ruta: Router, private formBuilder: FormBuilder) {
    this.formulario = new FormGroup({});
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.consultarAdmin();
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
    })
  }

  consultarAdmin() {
    this._usuariosService.getUserAdmin().subscribe(data => {
      this.usuarios = data;
      this.usuarioConsultado = this.usuarios.filter((element: { id_usuario: string; }) =>
        element.id_usuario === this.id_usuario);

      this.formulario = this.formBuilder.group({
        cedula: [this.usuarioConsultado[0].cedula, [Validators.required]],
        usuario: [this.usuarioConsultado[0].usuario, [Validators.required]],
        clave: [this.usuarioConsultado[0].clave, [Validators.required]],
        nombre: [this.usuarioConsultado[0].nombre, [Validators.required]],
        apellidos: [this.usuarioConsultado[0].apellidos, [Validators.required]],
        telefono: [this.usuarioConsultado[0].telefono, [Validators.required]],
        correo: [this.usuarioConsultado[0].correo, [Validators.required]],
        direccion: [this.usuarioConsultado[0].direccion, [Validators.required]],
      })
    });
  }

  editar() {
    this.user = {
      id_usuario: this.usuarioConsultado[0].id_usuario,
      usuario: this.formulario.value.usuario,
      clave: this.formulario.value.clave,
      nombre: this.formulario.value.nombre,
      apellidos: this.formulario.value.apellidos,
      cedula: this.formulario.value.cedula,
      telefono: this.formulario.value.telefono,
      correo: this.formulario.value.correo,
      direccion: this.formulario.value.direccion
    };

    this._usuariosService.updateUsuarioAdmin(this.user).subscribe(data => {
      this.user = data;
      if (this.user === 1) {
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
