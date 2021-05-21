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
import { CarritoComponent } from './components/carrito/carrito.component';
import { UsuariosAdminComponent } from './components/usuarios-admin/usuarios-admin.component';
import { UsuariosSucursalComponent } from './components/usuarios-sucursal/usuarios-sucursal.component';
import { PagoComponent } from './components/pago/pago.component';
import { ModificadoresComponent } from './components/modificadores/modificadores.component';
import { ProductosSucursalesComponent } from './components/productos-sucursales/productos-sucursales.component';



const routes: Routes = [

  {
    path: '', component: ChComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'ch/menu', component: MenuComponent },
      { path: 'ch/contactenos', component: ContactenosComponent },
      { path: 'ch/quienessomos', component: QuienessomosComponent },
      { path: 'ch/login', component: LoginComponent },
      { path: 'ch/registro', component: RegistroComponent },
      { path: 'ch/menu/carrito', component: CarritoComponent },
      { path: 'ch/menu/pago', component: PagoComponent},
    ]
  },

  {
    path: 'admin', component: LayaoutadminComponent, children: [
      { path: '', component: LoginAdminComponent },
      {
        path: 'inicio-admin', component: AdminComponent, children: [
          { path: 'ciudades', component: CiudadComponent },
          { path: 'sucursales', component: SucursalComponent },
          { path: 'categorias', component: CategoriasComponent },
          { path: 'productos', component: ProductosComponent },
          { path: 'modificadores', component: ModificadoresComponent },
          { path: 'registroAdmin', component: UsuariosAdminComponent },
          { path: 'registroSucursales', component: UsuariosSucursalComponent }
        ]
      },
    ]
  },
  {
    path: 'sucursal', component: LayaoutsucursalComponent, children: [
      { path: '', component: LoginSucursalComponent },
      {
        path: 'inicio-sucursal', component: InicioSucursalComponent, children: [
          { path: 'productosSucursales', component: ProductosSucursalesComponent },
          { path: 'ordenes', component: OrdenesComponent },
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
