import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';
import { RegistroSucursalesComponent } from '../registro-sucursales/registro-sucursales.component';


@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss']
})

export class SucursalComponent implements OnInit {

  page = 1;
  pageSize = 4;
  sucursales: any = [];
  item : number = 0;
  
  collectionSize = 0;

  constructor(private _sucursalService : SucursalService, private modalService: NgbModal) {
    this. refreshSucursales();
  }

  refreshSucursales() {
    this.sucursales
      .map((sucursal:any, i:any) => ({id: i + 1, ...sucursal}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this._sucursalService.getSucursales().subscribe(data => {
      this.sucursales = data;
      this.collectionSize = this.sucursales.length;
      console.log(this.sucursales);
    })
  }

  registroSucursal(){
    const modal = this.modalService.open(RegistroSucursalesComponent, { size: 'md'});
    modal.componentInstance.name = 'vale';
  }

}
