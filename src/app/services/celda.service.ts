import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celda } from '../models/celda.module';

@Injectable({
  providedIn: 'root'
})
export class CeldaService {

  private apibase = environment.apiUrl + 'Celda/';

  constructor(private _HttpClient: HttpClient){ }

  getCeldas(): Observable<Celda>{
    return this._HttpClient.get<Celda>(this.apibase);
  }

  getCeldaById(id: number): Observable<Celda>{
    return this._HttpClient.get<Celda>(this.apibase + id);
  }

  createCelda(celda: Celda): Observable<Celda>{
    return this._HttpClient.post<Celda>(this.apibase, celda);
  }
  updateCelda(celda: Celda): Observable<Celda>{
    return this._HttpClient.put<Celda>(this.apibase + celda.id, celda);
  }
  deleteCelda(id: number): Observable<Celda>{
    return this._HttpClient.delete<Celda>(this.apibase + id);
  }

}
