import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';
import { ComunicacionService } from '../services/comunicacion.service';
import { Usuario } from '../models/usuario.interface';
import { Empleado } from '../models/empleado.interface';

@Component({
  selector: 'app-lista-empleados',
  imports: [CommonModule],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css',
  standalone: true
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private comunicacionService: ComunicacionService
  ) {}

  ngOnInit() {
    this.cargarUsuarios();
    this.comunicacionService.usuariosActualizados$.subscribe(
      usuarios => this.empleados = usuarios
    );
  }

  cargarUsuarios() {
    this.usuarioService.buscarEmpleados(0, 0, '').subscribe(
      (data: Empleado[]) => {
        this.empleados = data;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }
}



