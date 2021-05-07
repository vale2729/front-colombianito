import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { EditarAdminComponent } from '../editar-admin/editar-admin.component';
import { RegistroAdminComponent } from '../registro-admin/registro-admin.component';

@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.scss']
})
export class UsuariosAdminComponent implements OnInit {

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
    this._usuariosService.getUserAdmin().subscribe(data => {
      this.usuarios  = data;
      this.collectionSize = this.usuarios.length;
      console.log(this.usuarios );
    })
  }

  registroAdmin(){
    const modal = this.modalService.open(RegistroAdminComponent, { size: 'md'});
    modal.componentInstance.name = 'vale';
  }

  editarAdmin(id:number){
    console.log(id);
    const modal = this.modalService.open(EditarAdminComponent, { size: 'md'});
    modal.componentInstance.id_usuario = id;
  }

}
