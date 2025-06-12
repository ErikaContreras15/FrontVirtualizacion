import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../module/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  //private apiUrl = 'http://34.41.48.181:8080/api/estudiantes';
private apiUrl = 'http://localhost:8080/virtualizacion_Back/rs/estudiantes';
  constructor(private http: HttpClient ) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crear(estudiante: any): Observable<any> {
    return this.http.post(this.apiUrl, estudiante);
  }


  eliminar(cedula: string): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${cedula}`);
}


  actualizar(id: number, estudiante: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, estudiante);
  }
  
}

