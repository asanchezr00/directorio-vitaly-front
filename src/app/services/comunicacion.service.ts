import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Empleado } from '../models/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private usuariosActualizadosSubject = new Subject<Empleado[]>();
  usuariosActualizados$ = this.usuariosActualizadosSubject.asObservable();

  actualizarUsuarios(empleados: Empleado[]) {
    this.usuariosActualizadosSubject.next(empleados);
  }
}