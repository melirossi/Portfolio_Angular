import { Routes } from '@angular/router';
import { PortadaComponent } from './components/portada/portada.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
  { path: 'portada', component: PortadaComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'habilidades', component: HabilidadesComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: 'portada', pathMatch: 'full' },
];
