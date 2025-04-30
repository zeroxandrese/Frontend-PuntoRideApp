import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { InicioComponent } from './Inicio/inicio.component';

const routes: Routes = [
  {path: '',component: InicioComponent},
  {path: 'privacidad', component: PrivacidadComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',            
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
