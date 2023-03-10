import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { FormularioCursoComponent } from './componente/formulario-curso/formulario-curso.component';
import { ListaCursoComponent } from './componente/lista-curso/lista-curso.component';

const routes: Routes = [
    {path: 'cursos', children: [
        {path: 'lista', component: ListaCursoComponent, canActivate: [AuthGuard]},
        {path: 'nuevo', component: FormularioCursoComponent, canActivate: [AuthGuard]},
        {path: 'editar/:id', component: FormularioCursoComponent, canActivate: [AuthGuard]}
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }