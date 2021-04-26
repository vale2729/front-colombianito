import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { RegistroCiudadesComponent } from '../registro-ciudades/registro-ciudades.component';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})

export class CiudadComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  ciudades : any = [];
  item : number = 0;

  constructor(private _ciudadService : CiudadesService, private modalService: NgbModal) {
    this.refreshCountries();
  }

  refreshCountries() {
    this.ciudades
      .map((ciudad:any, i:any) => ({id: i + 1, ...ciudad}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this._ciudadService.getCiudades().subscribe(data => {
      this.ciudades = data;
      this.collectionSize = this.ciudades.length;
      console.log(this.ciudades);
    })
  }

  registroCiudad(){
    const modal = this.modalService.open(RegistroCiudadesComponent, { size: 'md'});
    modal.componentInstance.name = 'vale';
  }

}

