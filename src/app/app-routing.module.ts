import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent} from './components/experiencia/experiencia.component'
import { EducacionComponent } from './components/educacion/educacion.component'; 
import { HardskillsComponent } from './components/hardskills/hardskills.component';
import { SoftskillsComponent } from './components/softskills/softskills.component';
import { ProyectosComponent} from './components/proyectos/proyectos.component'
import { MiportfolioComponent } from './components/miportfolio/miportfolio.component';



const routes: Routes = [
  { path: 'miportfolio', component: MiportfolioComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'hard_skills', component: HardskillsComponent },
  { path: 'soft_skills', component: SoftskillsComponent },
  { path: 'soft_skills/:id', component: SoftskillsComponent  },
  { path: 'proyectos', component: ProyectosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'miportfolio'},
  { path: '', pathMatch: 'full', redirectTo: 'miportfolio' }]
 
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
