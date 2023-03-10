import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(estudiante: any): string {
    return `${estudiante.nombre} ${estudiante.apellido1}`;
  }

}
