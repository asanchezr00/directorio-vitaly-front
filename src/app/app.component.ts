import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ListaEmpleadosComponent,
    CabeceraComponent,
    BarraBusquedaComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directorio-vitaly';
}
