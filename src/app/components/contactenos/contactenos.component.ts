import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss']
})
export class ContactenosComponent implements OnInit {
  sucursales : any;
  constructor(private _sucursalService: SucursalService) { }

  ngOnInit(): void {
    this._sucursalService.getSucursales().subscribe(data => {
      this.sucursales = data
    })
  }

}
