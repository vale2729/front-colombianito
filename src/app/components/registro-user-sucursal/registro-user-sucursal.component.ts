import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  user: any = {};
  sucursales: any = [];

  formulario : FormGroup;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _usuariosService: UsuariosService,
    private _sucursalService: SucursalService, private ruta: Router, private formBuilder : FormBuilder) {
      this.formulario = formBuilder.group({});
      this.crearFormulario();
  }

  ngOnInit(): void {
    this._sucursalService.getSucursales().subscribe(data => {
      this.sucursales = data;
    })
  }

  crearFormulario(){
    this.formulario = this.formBuilder.group({
      cedula : ['',[Validators.required]],
      usuario : ['',[Validators.required]],
      clave : ['',[Validators.required]],
      nombre : ['',[Validators.required]],
      apellido : ['',[Validators.required]],
      telefono : ['',[Validators.required]],
      correo : ['',[Validators.required]],
      direccion : ['',[Validators.required]],
      sucursal : ['',[Validators.required]]
    })
  }

  insertar() {
    this.user = {
      cedula: this.formulario.value.cedula,
      usuario: this.formulario.value.usuario,
      clave: this.formulario.value.clave,
      nombre: this.formulario.value.nombre,
      apellidos: this.formulario.value.apellido,
      telefono: this.formulario.value.telefono,
      correo: this.formulario.value.correo,
      direccion: this.formulario.value.direccion,
      sucursal: this.formulario.value.sucursal
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