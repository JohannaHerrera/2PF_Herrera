import { Injectable } from '@angular/core';
import { Alumno } from '../models/Alumno';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  
  private alumnos$ = new BehaviorSubject<Alumno[]>([
    {
      id: 1,
      firstName: 'Pedro',
      lastName: 'Cáceres',
      age: 15,
      grade: 9
    },
    {
      id: 2,
      firstName: 'Katherine',
      lastName: 'Balladares',
      age: 14,
      grade: 10
    },
    {
      id: 3,
      firstName: 'Alejandro',
      lastName: 'Navarro',
      age: 15,
      grade: 10
    },
    {
      id: 4,
      firstName: 'Liliana',
      lastName: 'Fernández',
      age: 15,
      grade: 8
    },
    {
      id: 5,
      firstName: 'Michael',
      lastName: 'Hidalgo',
      age: 16,
      grade: 7
    }    
  ])

  constructor() { }

  getAlumnosList(): Observable<Alumno[]> {
    return this.alumnos$.asObservable();
  }

  getAlumnoById(id: number): Observable<Alumno | undefined> {
    return this.alumnos$.asObservable()
      .pipe(
        map((alumno) => alumno.find((a) => a.id === id))
      )
  }

  createAlumno(alumno: Alumno): Observable<Alumno[]>{
    this.alumnos$.value.push(alumno);
    return this.alumnos$.asObservable();
  }

  deleteAlumno(id: number): Observable<Alumno[]>{
    // this.alumnos$.pipe(
    //   map(us => us.filter(alumno => alumno.id !== id))
    // ).subscribe(
    //   this.alumnos$.next.bind(this.alumnos$)
    // );
    let index = this.alumnos$.value.findIndex(item => item.id === id);
    this.alumnos$.value.splice(index, 1);;
    
    return this.alumnos$.asObservable();
  }
}
