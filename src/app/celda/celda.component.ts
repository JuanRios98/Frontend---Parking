import { Component } from '@angular/core';

@Component({
  selector: 'app-celda',
  standalone: false,
  templateUrl: './celda.component.html',
  styleUrl: './celda.component.css'
})
export class CeldaComponent {

  celdas = [
    { nombre: 'Celda 01', estado: 'disponible' },
    { nombre: 'Celda 02', estado: 'ocupada' },
    { nombre: 'Celda 03', estado: 'reservada' },
  ];
}
