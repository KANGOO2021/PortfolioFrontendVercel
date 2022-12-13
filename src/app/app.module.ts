import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadernavbarComponent } from './components/headernavbar/headernavbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HardskillsComponent } from './components/hardskills/hardskills.component';
import { SoftskillsComponent } from './components/softskills/softskills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AcercadeService } from './services/acercade.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcercadeEditComponent } from './pages/acercade-edit/acercade-edit.component';
import { SoftskillsService } from './services/softskills.service';
import { SoftskillsItemComponent } from './components/softskills-item/softskills-item.component';
import { SoftskillAddComponent } from './pages/softskilladd/softskilladd.component';
import { SoftskilleditComponent } from './pages/softskilledit/softskilledit.component';
import { HardskillsItemComponent } from './components/hardskills-item/hardskills-item.component';
import { HardskilladdComponent } from './pages/hardskilladd/hardskilladd.component';
import { HardskillsService } from './services/hardskills.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EducacionItemComponent } from './components/educacion-item/educacion-item.component';
import { EducacionAddComponent } from './pages/educacion-add/educacion-add.component';
import { EducacionService } from './services/educacion.service';
import { HardskilleditComponent } from './pages/hardskilledit/hardskilledit.component';
import { EducacioneditComponent } from './pages/educacionedit/educacionedit.component';
import { ProyectosaddComponent } from './pages/proyectosadd/proyectosadd.component';
import { ProyectoseditComponent } from './pages/proyectosedit/proyectosedit.component';
import { ProyectosItemComponent } from './components/proyectos-item/proyectos-item.component';
import { ProyectosService } from './services/proyectos.service';
import { PerfilEditComponent } from './pages/perfil-edit/perfil-edit.component';
import { LoginService } from './services/login.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { MiportfolioComponent } from './components/miportfolio/miportfolio.component';






@NgModule({
  declarations: [
    AppComponent,
    HeadernavbarComponent,
    AcercadeComponent,
    ExperienciaComponent,
    FooterComponent,
    EducacionComponent,
    HardskillsComponent,
    SoftskillsComponent,
    ProyectosComponent,
    LoginComponent,
    AcercadeEditComponent,
    SoftskillsItemComponent,
    SoftskillAddComponent,
    SoftskilleditComponent,
    HardskillsItemComponent,
    HardskilladdComponent,
    EducacionItemComponent,
    EducacionAddComponent,
    HardskilleditComponent,
    EducacioneditComponent,
    ProyectosaddComponent,
    ProyectoseditComponent,
    ProyectosItemComponent,
    PerfilEditComponent,
    MiportfolioComponent
  
    
    
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [AcercadeService, SoftskillsService, HardskillsService, EducacionService, ProyectosService, LoginService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
