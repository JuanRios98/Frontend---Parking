import { Component } from '@angular/core';
import { LoginRequest } from '../models/login.module';
import { LoginService } from '../services/login.service';
import { AuthResponseDto} from '../models/auth.module';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginRequest: LoginRequest = {
    email: '',
    password: '',
  };

  constructor(private _loginService: LoginService, private router: Router) {}

  onLogin() {
    this._loginService.login(this.loginRequest).subscribe({
      next: (response) => {
        console.log('Inicio de sesion', response);
        this.router.navigate(['/dashboard/']); 
      },
      error: (error) => {
        console.error('Error al iniciar sesión', error);
        // Mostrar un mensaje de error
        alert('Credenciales inválidas');
      }
    });
  }

 

}
