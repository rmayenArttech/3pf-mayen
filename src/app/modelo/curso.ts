import { Horario } from "./horario";


export interface Curso {
    id: string;
    nombreCurso: string;
    profesorAsignado: string;
    clases: Horario[];
}
