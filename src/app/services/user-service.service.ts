import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public usuarioMarcado: Usuario;

  constructor(private readonly httpClient: HttpClient) { }
  
  getAll(): Observable<string> {
    return this.httpClient.get(`${environment.serverURL}/GetUsuarios`, {responseType: 'text'});
  }

  getUsuario(): Observable<string> {
      let values = {};
      values["id"] = 1;
      return this.httpClient.get(`${environment.serverURL}/GetUsuario`, {params: values, responseType: 'text'});
  }

  addUsuario(valores:any): Observable<string> {
    var estrucUser = new Usuario();
    estrucUser.setId(valores.id);
    estrucUser.setNombre(valores.nombre)
    estrucUser.setApellidos(valores.apellidos);
    estrucUser.setDni(valores.dni);
    let values = {};

    values["usuario"] = estrucUser;
    return this.httpClient.post(`${environment.serverURL}/AddUsuario`, estrucUser, {responseType: 'text'});
  }

  updateUsuario(valores:any): Observable<string> {
    var estrucUser = new Usuario();
    estrucUser.setId(valores.id);
    estrucUser.setNombre(valores.nombre)
    estrucUser.setApellidos(valores.apellidos);
    estrucUser.setDni(valores.dni);
    let values = {};

    values["usuario"] = estrucUser;
    return this.httpClient.put(`${environment.serverURL}/UpdateUsuario`, estrucUser, {responseType: 'text'});
  }

  delUsuario(valores:any): Observable<string> {
    let values = {};
    values["id"] = valores.id;
    return this.httpClient.delete(`${environment.serverURL}/DelUsuario`, {params: values, responseType: 'text'});
  }

}
