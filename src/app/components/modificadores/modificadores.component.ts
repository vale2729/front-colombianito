import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModificadoresService } from 'src/app/services/modificadores/modificadores.service';
import { EditarModificadorComponent } from '../editar-modificador/editar-modificador.component';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { RegistroModificadoresComponent } from '../registro-modificadores/registro-modificadores.component';

@Component({
  selector: 'app-modificadores',
  templateUrl: './modificadores.component.html',
  styleUrls: ['./modificadores.component.scss']
})
export class ModificadoresComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize = 0;
  modificadores : any = [];
  item : number = 0;

  constructor(private _modificadorService : ModificadoresService, private modalService: NgbModal ) {
    this.refreshModificadores();
  }

  refreshModificadores() {
    this.modificadores
      .map((modificador:any, i:any) => ({id: i + 1, ...modificador}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
    this._modificadorService.getModificador().subscribe(data => {
      this.modificadores = data;
      this.collectionSize = this.modificadores.length;
      console.log(this.modificadores);
    })
  }

  registroModificador(){
    const modal = this.modalService.open(RegistroModificadoresComponent, { size: 'md'});
    modal.componentInstance.name = 'vale';
  }

  editarModificador(id:number){
    console.log(id);
    const modal = this.modalService.open(EditarModificadorComponent, { size: 'md'});
    modal.componentInstance.id_modificador = id;
  }

  eliminarModificador(id:number){
    console.log(id);
    const modal = this.modalService.open(ModalDeleteComponent, { size: 'md'});
    modal.componentInstance.mensaje = '¿Desea eliminar este modificador?';
    modal.componentInstance.id = id;
    modal.componentInstance.tabla = 'modificadores';
  }

}
