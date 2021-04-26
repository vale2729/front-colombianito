import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { RegistroUserSucursalComponent } from '../registro-user-sucursal/registro-user-sucursal.component';

@Component({
  selector: 'app-usuarios-sucursal',
  templateUrl: './usuarios-sucursal.component.html',
  styleUrls: ['./usuarios-sucursal.component.scss']
})
export class UsuariosSucursalComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = 0;

  usuarios : any = [];
  item : number = 0;

  constructor(private _usuariosService : UsuariosService, private modalService: NgbModal) {
    this.refreshUsuarios();
  }

  refreshUsuarios() {
    this.usuarios
      .map((usuario:any, i:any) => ({id: i + 1, ...usuario}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this._usuariosService.getUserSucursal().subscribe(data => {
      this.usuarios  = data;
      this.collectionSize = this.usuarios.length;
      console.log(this.usuarios );
    })
  }

  registroSucursal(){
    const modal = this.modalService.open(RegistroUserSucursalComponent, { size: 'md'});
    modal.componentInstance.name = 'vale';
  }

}
