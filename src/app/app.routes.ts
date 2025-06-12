import { Routes } from '@angular/router';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';

export const routes: Routes = [
  
  { path: 'registrar', component: EstudianteComponent },
  { path: 'estudiantes', component: EstudianteListComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' } 
];