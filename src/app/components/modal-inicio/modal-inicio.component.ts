import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';

@Component({
  selector: 'app-modal-inicio',
  templateUrl: './modal-inicio.component.html',
  styleUrls: ['./modal-inicio.component.scss']
})
export class ModalInicioComponent implements OnInit {

  formulario : FormGroup;
  ciudades : any =[];
  
  constructor(public activeModal: NgbActiveModal, private formBuilder : FormBuilder, private _sucursalService: SucursalService, 
    private _ciudadService : CiudadesService) {
      this.formulario = new FormGroup({});
      this.crearFormulario();
     }

  ngOnInit(): void {
    this._sucursalService.getSucursales().subscribe(data => {
      this.ciudades = data;
    })
  }

  crearFormulario(): void {
    this.formulario = this.formBuilder.group({
      ciudad : ['Elige una ciudad',[Validators.required]]
    });
  }

  setCiudad() {
    this.activeModal.close();
    this._ciudadService.setCiudadUsuario(this.formulario.value.ciudad);
  }

}
