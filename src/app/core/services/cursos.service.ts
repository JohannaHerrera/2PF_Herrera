import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Curso } from '../models/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos$ = new BehaviorSubject<Curso[]>([
    {
      id: 1,
      name: 'Matemática',
      description: 'Curso de Matemática I',
      startDate: new Date('04/15/2023'),
      endDate: new Date('09/30/2023')
    },
    {
      id: 2,
      name: 'Literatura',
      description: 'Curso de Lengua y Literatura',
      startDate: new Date('03/01/2023'),
      endDate: new Date('07/31/2023')
    },
    {
      id: 3,
      name: 'Inglés',
      description: 'Curso de Inglés B2',
      startDate: new Date('02/15/2023'),
      endDate: new Date('05/31/2023')
    },
    {
      id: 4,
      name: 'Biología',
      description: 'Curso de Biología Molecular',
      startDate: new Date('04/01/2023'),
      endDate: new Date('08/31/2023')
    }
  ])

  constructor() { }

  getCursosList(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }

  getCursoById(id: number): Observable<Curso | undefined> {
    return this.cursos$.asObservable()
      .pipe(
        map((curso) => curso.find((a) => a.id === id))
      )
  }

  createCurso(curso: Curso): Observable<Curso[]>{
    this.cursos$.value.push(curso);
    return this.cursos$.asObservable();
  }

  deleteCurso(id: number): Observable<Curso[]>{
    let index = this.cursos$.value.findIndex(item => item.id === id);
    this.cursos$.value.splice(index, 1);;
    
    return this.cursos$.asObservable();
  }
}
