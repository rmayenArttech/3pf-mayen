import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Estudiante } from 'src/app/modelo/estudiante';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServicioAlumnoService } from './servicio-alumno.service';
import { of } from 'rxjs';

describe('ServicioAlumnoService', () => {
  let service: ServicioAlumnoService;
  let httpClientSpy: { get: jasmine.Spy }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ServicioAlumnoService(httpClientSpy as any);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("El servicio regresa datos", (done: DoneFn) => {
    const mockDatos: Estudiante[] = [
      {
        "nombre": "José",
        "apellido1": "González",
        "apellido2": "Sánchez",
        "matricula": "62703946",
        "email": "josé.gonzález@email.com",
        "numeroTelefono": "555-237-693",
        "fechaNacimiento": "5/6/1953",
        "edad": 44,
        "urlImagen": "https://picsum.photos/id/185/200/300",
        "id": ""
      },
      {
        "nombre": "María",
        "apellido1": "Fernández",
        "apellido2": "López",
        "matricula": "92610117",
        "email": "maría.fernández@email.com",
        "numeroTelefono": "555-629-983",
        "fechaNacimiento": "2/27/1945",
        "edad": 50,
        "urlImagen": "https://picsum.photos/id/247/200/300",
        "id": ""
      }
    ];

    httpClientSpy.get.and.returnValue(of(mockDatos));

    service.obtenerEstudiantes().subscribe((alumnos: Estudiante[])=> {
      expect(alumnos).toEqual(mockDatos);
       done();
    });
  })
});
