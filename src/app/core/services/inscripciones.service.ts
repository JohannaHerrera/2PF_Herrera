import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/Inscripcion';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  private inscripciones$ = new BehaviorSubject<Inscripcion[]>([
    {
      id: 1,
      idAlumno: 1,
      idCurso: 1
    },
    {
      id: 2,
      idAlumno: 2,
      idCurso: 1
    }
  ])

  constructor() { }

  getInscripcionesList(): Observable<Inscripcion[]> {
    return this.inscripciones$.asObservable();
  }

  getInscripcionById(id: number): Observable<Inscripcion | undefined> {
    return this.inscripciones$.asObservable()
      .pipe(
        map((inscripcion) => inscripcion.find((a) => a.id === id))
      )
  } 

  createInscripcion(inscripcion: Inscripcion): Observable<Inscripcion[]>{
    this.inscripciones$.value.push(inscripcion);
    return this.inscripciones$.asObservable();
  }

  deleteInscripcion(id: number): Observable<Inscripcion[]>{
    let index = this.inscripciones$.value.findIndex(item => item.id === id);
    this.inscripciones$.value.splice(index, 1);;
    
    return this.inscripciones$.asObservable();
  }

  deleteAlumnoInscripcion(idAlumno: number): Observable<Inscripcion[]>{
    for (let i = 0; i < this.inscripciones$.value.length; i++) {
      if(this.inscripciones$.value[i].idAlumno === idAlumno){
        this.inscripciones$.value.splice(i, 1);
      }
    }

    return this.inscripciones$.asObservable();
  }

  deleteCursoInscripcion(idCurso: number): Observable<Inscripcion[]>{
    for (let i = 0; i < this.inscripciones$.value.length; i++) {
      if(this.inscripciones$.value[i].idCurso === idCurso){
        this.inscripciones$.value.splice(i, 1);
      }
    }

    return this.inscripciones$.asObservable();
  }
}
