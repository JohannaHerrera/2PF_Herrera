import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios$ = new BehaviorSubject<Usuario[]>([
    {
      id: 1,
      name: 'Johanna',
      email: 'johanna.herrera@mail.com'
    }
  ])

  constructor() { }

  getUsuariosList(): Observable<Usuario[]> {
    return this.usuarios$.asObservable();
  }

  getUsuarioById(id: number): Observable<Usuario | undefined> {
    return this.usuarios$.asObservable()
      .pipe(
        map((usuario) => usuario.find((a) => a.id === id))
      )
  }

  createUsuario(usuario: Usuario): Observable<Usuario[]>{
    this.usuarios$.value.push(usuario);
    return this.usuarios$.asObservable();
  }

  deleteUsuario(id: number): Observable<Usuario[]>{
    let index = this.usuarios$.value.findIndex(item => item.id === id);
    this.usuarios$.value.splice(index, 1);;
    
    return this.usuarios$.asObservable();
  }
}
