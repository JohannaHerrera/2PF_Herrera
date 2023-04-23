import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { InscripcionesComponent } from './dashboard/pages/inscripciones/inscripciones.component';
import { ViewAlumnosComponent } from './dashboard/pages/alumnos/view-alumnos/view-alumnos.component';
import { ViewCursoComponent } from './dashboard/pages/cursos/view-curso/view-curso.component';
import { UsuariosComponent } from './dashboard/pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'alumnos',
        children: [
          {
            path: '',
            component: AlumnosComponent
          },
          {
            path: ':id',
            component: ViewAlumnosComponent
          }
        ]       
      },
      {
        path: 'cursos',
        children: [
          {
            path: '',
            component: CursosComponent
          },
          {
            path: ':id',
            component: ViewCursoComponent
          }
        ]       
      },
      {
        path: 'inscripciones',
        component: InscripcionesComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
