import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { FormularioAlumnoComponent } from './componente/formulario-alumno/formulario-alumno.component';
import { ListaAlumnoComponent } from './componente/lista-alumno/lista-alumno.component';

const routes: Routes = [
    {path: 'alumno', children: [
        {path: 'lista', component: ListaAlumnoComponent, canActivate: [AuthGuard]},
        {path: 'nuevo', component: FormularioAlumnoComponent, canActivate: [AuthGuard]},
        {path: 'editar/:id', component: FormularioAlumnoComponent, canActivate: [AuthGuard]} 
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }