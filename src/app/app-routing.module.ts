import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ChComponent } from './components/ch/ch.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { LayaoutadminComponent } from './components/layaoutadmin/layaoutadmin.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';

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
    ]
  },

  {
    path: 'admin', component: LayaoutadminComponent, children: [
      { path: '', component: LoginAdminComponent},
      { path: 'inicioadmin', component: AdminComponent, children: [
        { path: 'ciudades', component: CiudadComponent},
        { path: 'Sucursales', component: SucursalComponent},
        { path: 'productos', component: ProductosComponent},
        { path: 'categorias', component: CategoriasComponent},
        { path: 'ordenes', component: OrdenesComponent}
      ]}
    ]
  }
];


// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent, canActivate: [ AuthorizatedGuard ] },
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: '**', redirectTo: '/home'}
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
