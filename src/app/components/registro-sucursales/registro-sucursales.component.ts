import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-registro-sucursales',
  templateUrl: './registro-sucursales.component.html',
  styleUrls: ['./registro-sucursales.component.scss']
})
export class RegistroSucursalesComponent implements OnInit {
  
  sucursal: any = {};
  ciudades: any = [];
  formulario : FormGroup;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _sucursalService: SucursalService,
    private _ciudadService: CiudadesService, private ruta : Router, private formBuilder : FormBuilder) {
      this.formulario = new FormGroup({});
      this.crearFormulario();
  }

  ngOnInit(): void {
    this._ciudadService.getCiudades().subscribe(data => {
      this.ciudades = data;
    })
  }

  crearFormulario(){
    this.formulario = this.formBuilder.group({
      nombreSucursal : ['',[Validators.required]],
      ciudad : ['',[Validators.required]],
      direccion : ['',[Validators.required]],
      telefono : ['',[Validators.required]],
      celular : ['',[Validators.required]],
    })
  }

  insertar() {
    this.sucursal = {
      nombre_sucursal: this.formulario.value.nombreSucursal,
      ciudad: this.formulario.value.ciudad,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono,
      celular: this.formulario.value.celular
    };

    this._sucursalService.setSucursal(this.sucursal).subscribe(data => {
      this.sucursal = data;
      console.log(this.sucursal);
      if (this.sucursal === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'Solo se puede registrar una sucursal por ciudad';
      }else if (Object.keys(this.sucursal).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La sucursal se creo con exito';
        this.redirectTo('admin/inicio-admin/sucursales');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La sucursal no se pudo registrar, intentalo de nuevo';
      }
    })

  }

  redirectTo(url:string){
    this.ruta.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.ruta.navigate([url]));
 }

}


