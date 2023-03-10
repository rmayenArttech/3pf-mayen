import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/modelo/curso';
import { ServicioCursoService } from '../../servicio/servicio-curso.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulario-curso',
  templateUrl: './formulario-curso.component.html',
  styleUrls: ['./formulario-curso.component.css']
})
export class FormularioCursoComponent {

  cursoFG!: FormGroup;
  apellido1  = new FormControl('');
  apellido2  = new FormControl('');

  nombreCurso = new FormControl('', [Validators.required]);
  profesorAsignado = new FormControl('', [Validators.required]);
  id = new FormControl('', [Validators.required]);
  clases = new FormControl('', [Validators.required]);
  
  curso: Curso = {
    nombreCurso: '',
    profesorAsignado:'',    
    id: '',
    clases: [],
    
  }

  title!: string;
  
  edit: boolean = false;

  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder, private service: ServicioCursoService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.title = "Registrar Nuevo Curso"
    const params = this.activatedRoute.snapshot.params;
    this.setFormGroupCurso()
    if (params['id']) {
      
      this.service.obtenerCursoPorId(params['id']).subscribe(curso => {
        this.curso = curso;
        this.title = "Editar curso: "+ curso.nombreCurso;
        this.edit = true;
        this.setFormGroupCurso()
        console.log(curso)
      }
      )
    }
  }


  guardarRegistro() {
    this.setObject();
    console.log("curso creado con exito: " + (JSON.stringify(this.curso)))
    this.service.agregarCurso(this.curso)
    this.router.navigate(['cursos/lista']);
  }

  updateRegistro() {
    this.setObject()
    this.service.editarCurso(this.curso)
    console.log("update", this.curso);
    this.router.navigate(['cursos/lista']);
  }

  setObject() {
    this.curso.nombreCurso = this.cursoFG.value.nombreCurso;
    this.curso.profesorAsignado = this.cursoFG.value.profesorAsignado;
    this.curso.id = this.cursoFG.value.id;
    this.curso.clases = [{ dia: '', hora: '' }];
   
  }


  setFormGroupCurso() {
    this.cursoFG = this.fb.group({
      profesorAsignado: [this.curso.profesorAsignado, [Validators.required]],
      nombreCurso: [this.curso.nombreCurso, [Validators.required]],
      id: [this.curso.id, Validators.required],
    });
    console.log("set estudiante" + this.cursoFG);
  }
}
