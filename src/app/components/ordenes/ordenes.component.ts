import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes/ordenes.service';
import { LoginService } from 'src/app/services/login/login.service';
import { VerOrdenComponent } from '../ver-orden/ver-orden.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.scss']
})
export class OrdenesComponent implements OnInit {
  
  ordenes : any = [];

  producto : any = []

  constructor(private _ordenService :  OrdenesService, private _Login: LoginService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this._ordenService.getOrdenes().subscribe(data => {
      this.ordenes = data;
      //console.log(this.ordenes);

      this._ordenService.getOrdenProducto({id_orden:this.ordenes[5].id_orden}).subscribe(data => {
        console.log(data);
      })

      for (let i = 0; i < this.ordenes.length; i++) {
        console.log(this.ordenes[i].id_orden);
        this._ordenService.getOrdenProducto({id_orden : this.ordenes[i].id_orden}).subscribe(orden =>{
          //const producto1 = data;
          console.log(orden);
          //this.producto.push(producto1);
        })
      }
      //console.log(this.producto)
    })
  }

   EditarEstadoOrden(id:number){
    console.log(id);
    const modal = this.modalService.open(VerOrdenComponent, {size: 'md'});
    modal.componentInstance.id_orden = id;
  }

}



