import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';


const routes: Routes = [
  {path:'', component : InicioComponent},
  {path:'inicio', component : InicioComponent},
	{path:'menu', component : MenuComponent},
  {path:'contactenos', component : ContactenosComponent},
  {path:'quienessomos', component : QuienessomosComponent},
  {path:'login', component : LoginComponent},
  {path:'registro', component : RegistroComponent},
  {path:'ciudades', component : CiudadComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
