import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.interface';
import { Empleado } from '../models/empleado.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  buscarPorApellidos(apellidos: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/buscar?apellidos=${apellidos}`);
  }

  buscarPorEmail(email: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/buscar?email=${email}`);
  }

  buscarPorApellidosYEmail(apellidos?: string , email?: string): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiUrl}/buscar?apellidos=${apellidos}&email=${email}`);
  }

  getDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8081/api/usuarios/departamentos');
  }

  getCentros(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8081/api/usuarios/centros');
  }

  buscarEmpleados(idCentro: number, idDepartamento: number, apellidos: string): Observable<Empleado[]> {
    let params = new HttpParams()
      .set('idCentro', idCentro.toString())
      .set('idDepartamento', idDepartamento.toString());

    if (apellidos) {
      params = params.set('apellidos', apellidos);
    }

    return this.http.get<Empleado[]>('http://localhost:8081/api/usuarios/filtrar', { params });
  }
}