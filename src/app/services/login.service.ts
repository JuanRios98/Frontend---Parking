import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../models/login.module'; 
import { Observable } from 'rxjs';
import { AuthResponseDto } from '../models/auth.module'; 
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiBase = environment.apiUrl + 'Auth/login';
    
  constructor(private _http: HttpClient) { }

  login(_LoginRequest: LoginRequest): Observable<AuthResponseDto>{
    return this._http.post<AuthResponseDto>(this.apiBase, _LoginRequest);
  }

}