import { Component } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss'
})
export class EstudianteComponent {
estudiante = {
    cedula: '', nombre: '', apellido: '', celular: '',
    correo: '', direccion: '', contrasena: ''
  };

  constructor(private service: EstudianteService) {}

  registrar() {
    this.service.crear(this.estudiante).subscribe(() => {
      alert('Estudiante registrado');
      this.estudiante = { cedula: '', nombre: '', apellido: '', celular: '', correo: '', direccion: '', contrasena: '' };
    });
  }

}