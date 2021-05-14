import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.scss']
})
export class EditarSucursalComponent implements OnInit {

  id_sucursal: string = '';
  sucursal: any = [];
  sucursales: any = [];
  ciudades: any = [];
  componentRef: any;
  sucursalConsultada:any = [];
  formulario : FormGroup;
  
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _sucursalService : SucursalService,
    private _ciudadService: CiudadesService, private ruta : Router, private formBuilder : FormBuilder) { 
      this.formulario = new FormGroup({});
      this.crearFormulario();
    }

  ngOnInit(): void {
    this.consultarSucursal();
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

  consultarSucursal(){
    this._sucursalService.getSucursales().subscribe(data => {
      this.sucursales = data;
      this.sucursalConsultada=this.sucursales.filter((element: { id_sucursal: string; }) => element.id_sucursal === this.id_sucursal);
      
      this.formulario = this.formBuilder.group({
        nombreSucursal : [this.sucursalConsultada[0].nombre_sucursal,[Validators.required]],
        ciudad : [this.sucursalConsultada[0].ciudad,[Validators.required]],
        direccion : [this.sucursalConsultada[0].direccion,[Validators.required]],
        telefono : [this.sucursalConsultada[0].telefono,[Validators.required]],
        celular : [this.sucursalConsultada[0].celular,[Validators.required]]
      });
    });
    this._ciudadService.getCiudades().subscribe(data => {
      this.ciudades = data;
    });
  }

  editar() {
    this.sucursal = {
      id_sucursal: this.sucursalConsultada[0].id_sucursal,
      nombre_sucursal: this.formulario.value.nombreSucursal,
      ciudad: this.formulario.value.ciudad,
      direccion: this.formulario.value.direccion,
      telefono: this.formulario.value.telefono,
      celular: this.formulario.value.celular
    };

    this._sucursalService.updateSucursal(this.sucursal).subscribe(data => {
      this.sucursal = data;
      if (this.sucursal === 1) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'Ya se encuentra una sucursal registrada en esta ciudad, cambia de ciudad';
      }else if (Object.keys(this.sucursal).length > 0) {
        this.activeModal.close();
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La ciudad se edito con exito';
        this.redirectTo('admin/inicio-admin/sucursales');

      } else {
        const modal = this.modalService.open(ModalComponent);
        modal.componentInstance.name = 'La sucursal no se pudo editar, intentalo de nuevo';
      }
    })

  }

  redirectTo(uri:string){
    this.ruta.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.ruta.navigate([uri]));
 }

}
