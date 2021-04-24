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
import { LayaoutsucursalComponent } from './components/layaoutsucursal/layaoutsucursal.component';
import { LoginSucursalComponent } from './components/login-sucursal/login-sucursal.component';
import { InicioSucursalComponent } from './components/inicio-sucursal/inicio-sucursal.component';


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
      { path: 'inicio-admin', component: AdminComponent, children: [
        { path: 'ciudades', component: CiudadComponent}
      ]}
    ]
  },

  {
    path: 'sucursal', component: LayaoutsucursalComponent, children: [
      { path: '', component: LoginSucursalComponent},
      { path: 'inicio-sucursal', component: InicioSucursalComponent, children: [
        { path: 'ciudades', component: CiudadComponent}
      ]}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
