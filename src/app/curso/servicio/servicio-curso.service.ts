import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Curso } from 'src/app/modelo/curso';

@Injectable({
  providedIn: 'root'
})
export class ServicioCursoService {
  private cursos: Curso[] = [
    {
      "id": "an0101",
      "nombreCurso": "Angular",
      "profesorAsignado": "Abner González",
      "clases": [
        { dia: 'Lunes', hora: '11:00-13:00' },
        { dia: 'Miercoles', hora: '11:00-13:00' },
        { dia: 'Viernes', hora: '11:00-13:00' },
      ]
    },
    
    {
      "id": "jaee0101",
      "nombreCurso": "Java EE",
      "profesorAsignado": "Martin Gallego",
      "clases": [
        { dia: 'Martes', hora: '11:00-13:00' },
        { dia: 'Jueves', hora: '11:00-13:00' }
      ]
    },
    {
      "id": "htjscs0101",
      "nombreCurso": "HTML 5, JS y CSS",
      "profesorAsignado": "Patricia Ramirez",
      "clases": [
        { dia: 'Lunes', hora: '11:00-13:00' },
        { dia: 'Miercoles', hora: '11:00-13:00' },
        { dia: 'Viernes', hora: '11:00-13:00' },
      ]
    }
  ];
  private cursos$: BehaviorSubject<Curso[]>
  constructor() {
    this.cursos$ = new BehaviorSubject<Curso[]>(this.cursos)
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

  obtenerCursoPorId(id: string): Observable<Curso> {
    console.log("id: ", id)
    return this.cursos$.pipe(
      map(cursos => cursos.filter(cursos => cursos.id === id)[0]),
      filter(cursos => !!cursos),
    );
  }

  agregarCurso(curso: Curso): void{
    this.cursos.push(curso)
    this.cursos$.next(this.cursos)
  }

  editarCurso(curso: Curso):void{
    const indice = this.cursos.findIndex((e: Curso) => e.id === curso.id);

    if(indice > -1){
      this.cursos[indice] = curso
      this.cursos$.next(this.cursos)
    }

  }

  eliminarCurso(curso: Curso):void{
    const indice = this.cursos.findIndex((c: Curso) => c.id === curso.id);

    if(indice > -1){
      this.cursos.splice(indice, 1)
      this.cursos$.next(this.cursos)
    }
  }
}
