import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/modelo/estudiante';
import { ServicioAlumnoService } from '../../servicio/servicio-alumno.service';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})

export class FormularioAlumnoComponent {


  title!: string;

  estudianteFG!: FormGroup;

  nombre = new FormControl('', [Validators.required]);
  apellido1 = new FormControl('');
  apellido2 = new FormControl('', [Validators.required]);
  matricula = new FormControl('', [Validators.required]);
  fechaNacimiento = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  numeroTelefono = new FormControl('', [Validators.required]);
  edad = new FormControl(0, [Validators.required]);
  urlImagen = new FormControl('', [Validators.required]);

  estudiante: Estudiante = {
    nombre: '',
    apellido1: '',
    apellido2: '',
    matricula: '',
    email: '',
    numeroTelefono: '',
    fechaNacimiento: '',
    edad: 0,
    urlImagen: '',
    id: ''
  }

  dataSource$!: Observable<Estudiante[]>;
  estudy: any;

  edit: boolean = false;

  matcher = new MyErrorStateMatcher();
  constructor(private fb: FormBuilder, private service: ServicioAlumnoService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.title = "Registrar Nuevo Alumno"
    const params = this.activatedRoute.snapshot.params;
    this.setFormGroupEstudiante()
    if (params['id']) {
      
      this.service.obtenerEstudiantePorId(params['id']).subscribe(estudiante => {
        this.estudiante = estudiante;
        this.title = "Editar alumno: "+ estudiante.nombre + " " + estudiante.apellido1
        this.edit = true;
        this.setFormGroupEstudiante()
        console.log(estudiante)
      }
      )
    }
  }


  guardarRegistro() {
    this.setObject();
    this.service.agregarEstudiante(this.estudiante).subscribe(
      (response) => {
        console.log('Estudiante agregado correctamente', response);
        this.router.navigate(['/alumno/lista']);
      },
      (error) => {
        console.log('Error al agregar estudiante', error);
      }
    );
    console.log("alumno creado con exito: " + (JSON.stringify(this.estudiante)))
  }

  updateRegistro() {
    this.setObject()
    console.log("update", this.estudiante);
    this.service.editarEstidiante(this.estudiante).subscribe(
      (response) => {
        console.log('Estudiante editado correctamente', response);
        this.router.navigate(['/alumno/lista']);
      },
      (error) => {
        console.log('Error al editado estudiante', error);
      }
    );


    this.router.navigate(['alumno/lista']);

  }

  setObject() {
    this.estudiante.nombre = this.estudianteFG.value.nombre;
    this.estudiante.apellido1 = this.estudianteFG.value.apellido1;
    this.estudiante.apellido2 = this.estudianteFG.value.apellido2;
    this.estudiante.matricula = this.estudianteFG.value.matricula;
    this.estudiante.fechaNacimiento = this.estudianteFG.value.fechaNacimiento;
    this.estudiante.email = this.estudianteFG.value.email;
    this.estudiante.numeroTelefono = this.estudianteFG.value.numeroTelefono;
    this.estudiante.edad = this.estudianteFG.value.edad;
    this.estudiante.urlImagen = this.estudianteFG.value.urlImagen;
  }


  setFormGroupEstudiante() {
    this.estudianteFG = this.fb.group({
      nombre: [this.estudiante.nombre, [Validators.required]],
      apellido1: [this.estudiante.apellido1, [Validators.required]],
      apellido2: [this.estudiante.apellido2],
      matricula: [this.estudiante.matricula, [Validators.required]],
      fechaNacimiento: [this.estudiante.fechaNacimiento, Validators.required],
      email: [this.estudiante.email, Validators.required],
      numeroTelefono: [this.estudiante.numeroTelefono, Validators.required],
      edad: [this.estudiante.edad, [Validators.required]],
      urlImagen: [this.estudiante.urlImagen, [Validators.required]]
    });
    console.log("set estudiante" + this.estudianteFG);
  }
}
