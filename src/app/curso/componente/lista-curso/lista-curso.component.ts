import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/modelo/curso';
import { ServicioCursoService } from '../../servicio/servicio-curso.service';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})


export class ListaCursoComponent {

  title!: string;

  dataSource$!: Observable<Curso[]>;

  constructor(private servicioConsultaService: ServicioCursoService){}
  ngOnInit(): void {
    this.title = "Lista Cursos"
    this.dataSource$ = this.servicioConsultaService.obtenerCursos();
  }

  elimnarCurso(curso: Curso){
    console.log("curso: ", curso)
    this.servicioConsultaService.eliminarCurso(curso);
  }


}
