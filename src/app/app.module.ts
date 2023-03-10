import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Inicio Servicio

import { AnimacionService } from "./Services/animacion.service"
import { PortfolioService } from './Services/portfolio.service';

// Fin Servicio

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PortadaComponent } from './components/portada/portada.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PortadaComponent,
    PerfilComponent,
    HabilidadesComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AnimacionService, 
    PortfolioService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
