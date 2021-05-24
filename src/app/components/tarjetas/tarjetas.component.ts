import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CiudadesService } from 'src/app/services/ciudades/ciudades.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { SucursalService } from 'src/app/services/sucursales/sucursal.service';
import { ProductoModificadorComponent } from '../producto-modificador/producto-modificador.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit, OnChanges {
  @Input() categoria: number = 0;
  productos: any = [];
  productoCategoria: any = [];

  sucursal: number = 0;
  productoConsultado : any= [];

  constructor(private _productoservice: ProductosService, private modalService: NgbModal, private _ciudadService: CiudadesService,
    private _sucursalService: SucursalService) {
  }

  ngOnInit(): void {
    this.sucursal = this._ciudadService.getCiudadUsuario();

    this._productoservice.getProductos().subscribe(data => {
      this.productos = data;
      this.productoConsultado = this.productos.filter((element: { sucursal: number; }) => element.sucursal == this.sucursal);
      this.productoConsultado = this.productoConsultado.filter((element: { estado: string; }) => element.estado == "Activo");
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    this._productoservice.getProductos().subscribe(data => {
      this.productos = data;
      this.productoConsultado = this.productos.filter((element: { sucursal: number; }) => element.sucursal == this.sucursal);
      this.productoConsultado = this.productoConsultado.filter((element: { estado: string; }) => element.estado == "Activo");
      this.productoConsultado = this.productoConsultado.filter((element: { categoria: number; }) => element.categoria === this.categoria);
      //this.productos = this.productoCategoria;
    })
  }

  carrito(id: number, nombre: string, precio: number, foto: string) {

    const modal = this.modalService.open(ProductoModificadorComponent, { size: 'md' });
    modal.componentInstance.id = id;
    modal.componentInstance.nombre = nombre;
    modal.componentInstance.precio = precio;
    modal.componentInstance.foto = foto;
  }

}
