import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componente/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UtilsModule } from './utils.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoRoutingModule } from './alumno/alumno-routing.module';
import { AlumnoModule } from './alumno/alumno.module';
import { CursoRoutingModule } from './curso/curso-routing.module';
import { CursoModule } from './curso/curso.module';
import { LoginComponent } from './componente/login/login.component';
import { ServicioAlumnoService } from './alumno/servicio/servicio-alumno.service';
import { ServicioCursoService } from './curso/servicio/servicio-curso.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,    
    MaterialModule,
    UtilsModule,
    AlumnoRoutingModule,
    CursoRoutingModule,
    HttpClientModule
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
    ServicioAlumnoService,
    ServicioCursoService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
