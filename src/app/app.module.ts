import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { InicioComponent } from './Inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PrivacidadComponent,
  ],
  imports: [
    //esto fue para que se pusieran las rutas en la url
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
