import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { MaterialModule } from 'src/app/material.module';
import { UtilsModule } from 'src/app/utils.module';

import { FormularioAlumnoComponent } from './formulario-alumno.component';

describe('FormularioAlumnoComponent', () => {
  let component: FormularioAlumnoComponent;
  let fixture: ComponentFixture<FormularioAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAlumnoComponent ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        UtilsModule,
        CommonModule,
        RouterModule,
        AppModule 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario no cambia a valid cuando solo se llena un campo', ()=>{
    const formulario = component.estudianteFG;
    const comision = formulario.controls["nombre"];

    comision.setValue('Ray');

    expect(formulario.valid).toBeFalse();
  });

  it('El formulario cambia a VALID cuando ingresamos todos los valores a los campos', ()=>{
    const formulario = component.estudianteFG;
    const nombre = formulario.controls["nombre"];
    const apellido1 = formulario.controls["apellido1"];
    const apellido2 = formulario.controls["apellido2"];
    const matricula = formulario.controls["matricula"];
    const numeroTelefono = formulario.controls["numeroTelefono"];
    const fechaNacimiento = formulario.controls["fechaNacimiento"];
    const edad = formulario.controls["edad"];
    const urlImagen = formulario.controls["urlImagen"];

    nombre.setValue('Ray');
    apellido1.setValue('Mayen');
    apellido2.setValue('Ortiz');
    matricula.setValue('312831');
    numeroTelefono.setValue('5518379812');
    fechaNacimiento.setValue('30-06-1988');
    edad.setValue('34');
    urlImagen.setValue('https://picsum.photos/id/247/200/300');

    expect(formulario.valid).toBeTrue();
  });

  


});
