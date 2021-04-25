import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ChComponent } from './components/ch/ch.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { LayaoutadminComponent } from './components/layaoutadmin/layaoutadmin.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { LayaoutsucursalComponent } from './components/layaoutsucursal/layaoutsucursal.component';
import { LoginSucursalComponent } from './components/login-sucursal/login-sucursal.component';
import { InicioSucursalComponent } from './components/inicio-sucursal/inicio-sucursal.component';
import { RegistroAdminComponent } from './components/registro-admin/registro-admin.component';
import { RegistroSucursalesComponent } from './components/registro-sucursales/registro-sucursales.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [

  {
    path: '', component: ChComponent, children: [
      { path: 'ch/inicio', component: InicioComponent },
      { path: 'ch/menu', component: MenuComponent },
      { path: 'ch/contactenos', component: ContactenosComponent },
      { path: 'ch/quienessomos', component: QuienessomosComponent },
      { path: 'ch/login', component: LoginComponent },
      { path: 'ch/registro', component: RegistroComponent },
      {path:'ch/ciudades', component : CiudadComponent}
      { path: 'ch/menu/carrito', component: CarritoComponent },
    ]
  },

  {
    path: 'admin', component: LayaoutadminComponent, children: [
      { path: '', component: LoginAdminComponent},
      { path: 'inicio-admin', component: AdminComponent, children: [
        { path: 'ciudades', component: CiudadComponent},
        { path: 'Sucursales', component: SucursalComponent},
        { path: 'productos', component: ProductosComponent},
        { path: 'categorias', component: CategoriasComponent},
        { path: 'ordenes', component: OrdenesComponent},
        { path: 'registroAdmin', component: RegistroAdminComponent},
        { path: 'registroSucursales', component: RegistroSucursalesComponent}
      ]},
    ]
  },
  {
    path: 'sucursal', component: LayaoutsucursalComponent, children: [
      { path: '', component: LoginSucursalComponent },
      {
        path: 'inicio-sucursal', component: InicioSucursalComponent, children: [
          { path: 'ciudades', component: CiudadComponent }
        ]
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
