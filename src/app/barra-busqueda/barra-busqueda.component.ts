import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { ComunicacionService } from '../services/comunicacion.service';
import { Empleado } from '../models/empleado.interface';
@Component({
  selector: 'barra-busqueda',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {
  apellidos: string = '';
  email: string = '';
  departamentos: any[] = [];
  departamentoSeleccionado: number = 0;
  centroSeleccionado: number = 0;
  centros: any[] = [];
  isLoading: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private comunicacionService: ComunicacionService,
  ) {}

  ngOnInit() {
    this.cargarDepartamentos();
    this.cargarCentros();
  }

  cargarDepartamentos() {
    this.usuarioService.getDepartamentos().subscribe(
      data => this.departamentos = data
    );
  }

  cargarCentros() {
    this.usuarioService.getCentros().subscribe(
      (data) => {
        this.centros = data;
      },
      (error) => {
        console.error('Error al cargar centros:', error);
      }
    );
  }

  filtrar() {
    this.isLoading = true;
    this.usuarioService.buscarEmpleados(
      this.centroSeleccionado,
      this.departamentoSeleccionado,
      this.apellidos
    ).subscribe(empleados => {
      this.comunicacionService.actualizarUsuarios(empleados);
      this.isLoading = false;
    }, error => {
      console.error(error);
      this.isLoading = false;
    });
  }
}
