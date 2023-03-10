import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioAlumnoComponent } from './componente/formulario-alumno/formulario-alumno.component';
import { ListaAlumnoComponent } from './componente/lista-alumno/lista-alumno.component';
import { MaterialModule } from '../material.module';
import { ServicioAlumnoService } from './servicio/servicio-alumno.service';
import { UtilsModule } from '../utils.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../componente/nav-bar/nav-bar.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [  
    FormularioAlumnoComponent, 
    ListaAlumnoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UtilsModule,
    ReactiveFormsModule,
    RouterModule,
    AppModule  
  ],
  providers: [
    ServicioAlumnoService
  ]
})
export class AlumnoModule { }
