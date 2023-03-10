import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecerasTitulo20Directive } from './directiva/cabeceras-titulo-20.directive';
import { NombreCompletoPipe } from './pipe/nombre-completo.pipe';



@NgModule({
  declarations: [
    NombreCompletoPipe,
    CabecerasTitulo20Directive   
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NombreCompletoPipe,
    CabecerasTitulo20Directive   
  ]
})
export class UtilsModule { }
