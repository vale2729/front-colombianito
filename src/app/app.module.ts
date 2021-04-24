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
    LayaoutadminComponent
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
