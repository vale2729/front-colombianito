import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  user: any = {};

  formulario: FormGroup;

  constructor(private _usuariosService: UsuariosService, public activeModal: NgbActiveModal, private modalService: NgbModal,
    private ruta: Router, private formBuilder : FormBuilder) {
      this.formulario = new FormGroup({});
      this.crearFormulario();
  }


  ngOnInit(): void {
  }

  crearFormulario(){
    this.formulario = this.formBuilder.group({
      cedula : ['',[Validators.required]],
      usuario : ['', [Validators.required]],
      clave : ['', [Validators.required]],
      nombre : ['', [Validators.required]],
      apellido : ['', [Validators.required]],
      telefono : ['', [Validators.required]],
      correo : ['', [Validators.required]],
      direccion : ['', [Validators.required]],
    })
  }

  insertar() {
    this.user = {  
      usuario: this.formulario.value.usuario,
      clave: this.formulario.value.clave,
      nombre: this.formulario.value.nombre,
      apellidos: this.formulario.value.apellido,
      cedula: this.formulario.value.cedula,
      telefono: this.formulario.value.telefono,
      correo: this.formulario.value.correo,
      direccion: this.formulario.value.direccion
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
