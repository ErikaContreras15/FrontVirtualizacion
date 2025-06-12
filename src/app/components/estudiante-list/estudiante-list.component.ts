import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstudianteComponent } from '../estudiante/estudiante.component';
import { Estudiante } from '../../module/estudiante';

@Component({
  selector: 'app-estudiante-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiante-list.component.html',
  styleUrl: './estudiante-list.component.scss'
})

export class EstudianteListComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  nuevoEstudiante: Estudiante = {
    cedula: '', nombre: '', apellido: '', celular: '', correo: '', direccion: ''
  };

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.listarEstudiantes();
  }


  listarEstudiantes() {
  this.estudianteService.listar().subscribe((data: Estudiante[]) => {
    this.estudiantes = data;
  });
}


  registrar() {
    this.estudianteService.crear(this.nuevoEstudiante).subscribe(() => {
      this.listarEstudiantes();
      this.nuevoEstudiante = { cedula: '', nombre: '', apellido: '', celular: '', correo: '', direccion: '' };
    });
  }

  eliminar(cedula: string) {
    this.estudianteService.eliminar(cedula).subscribe(() => {
      this.listarEstudiantes();
    });
  }

}