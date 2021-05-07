import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './components/menu/menu.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { ModalComponent } from './components/modal/modal.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { ChComponent } from './components/ch/ch.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminComponent } from './components/admin/admin.component';
import { LayaoutadminComponent } from './components/layaoutadmin/layaoutadmin.component';
import { NavSucursalComponent } from './components/nav-sucursal/nav-sucursal.component';
import { LoginSucursalComponent } from './components/login-sucursal/login-sucursal.component';
import { LayaoutsucursalComponent } from './components/layaoutsucursal/layaoutsucursal.component';
import { InicioSucursalComponent } from './components/inicio-sucursal/inicio-sucursal.component';
import { RegistroAdminComponent } from './components/registro-admin/registro-admin.component';
import { RegistroSucursalesComponent } from './components/registro-sucursales/registro-sucursales.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { UsuariosAdminComponent } from './components/usuarios-admin/usuarios-admin.component';
import { UsuariosSucursalComponent } from './components/usuarios-sucursal/usuarios-sucursal.component';
import { RegistroCategoriaComponent } from './components/registro-categoria/registro-categoria.component';
import { RegistroCiudadesComponent } from './components/registro-ciudades/registro-ciudades.component';
import { RegistroUserSucursalComponent } from './components/registro-user-sucursal/registro-user-sucursal.component';
import { PagoComponent } from './components/pago/pago.component';
import { ModificadoresComponent } from './components/modificadores/modificadores.component';
import { RegistroModificadoresComponent } from './components/registro-modificadores/registro-modificadores.component';
import { RegistroProductosComponent } from './components/registro-productos/registro-productos.component';
import { EditarCiudadComponent } from './components/editar-ciudad/editar-ciudad.component';
import { EditarSucursalComponent } from './components/editar-sucursal/editar-sucursal.component';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';
import { EditarModificadorComponent } from './components/editar-modificador/editar-modificador.component';
import { EditarUserSucursalComponent } from './components/editar-user-sucursal/editar-user-sucursal.component';
import { EditarAdminComponent } from './components/editar-admin/editar-admin.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    NavComponent,
    ContactenosComponent,
    QuienessomosComponent,
    RegistroComponent,
    InicioComponent,
    TarjetasComponent,
    ModalComponent,
    CiudadComponent,
    SucursalComponent,
    CategoriasComponent,
    ProductosComponent,
    OrdenesComponent,
    NavAdminComponent,
    ChComponent,
    LoginAdminComponent,
    AdminComponent,
    LayaoutadminComponent,
    NavSucursalComponent,
    LoginSucursalComponent,
    LayaoutsucursalComponent,
    InicioSucursalComponent,
    RegistroAdminComponent,
    RegistroSucursalesComponent,
    CarritoComponent,
    UsuariosAdminComponent,
    UsuariosSucursalComponent,
    RegistroCategoriaComponent,
    RegistroCiudadesComponent,
    RegistroUserSucursalComponent,
    PagoComponent,
    ModificadoresComponent,
    RegistroModificadoresComponent,
    RegistroProductosComponent,
    EditarCiudadComponent,
    EditarSucursalComponent,
    EditarCategoriaComponent,
    EditarModificadorComponent,
    EditarUserSucursalComponent,
    EditarAdminComponent,
    ModalDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
