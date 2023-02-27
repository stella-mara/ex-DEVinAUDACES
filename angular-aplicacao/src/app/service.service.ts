import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personagem } from './personagem';
import { API_PATH } from '../environments/evironments';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //private url = 'http://localhost:3000/personagens';
  //private urlEnv =

  constructor(private _httpCliente: HttpClient) { }

  public getPersonagens(): Observable<Personagem[]> {
    return this._httpCliente.get<Personagem[]>(`${API_PATH}`);
  }
}
