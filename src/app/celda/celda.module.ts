import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeldaComponent } from './celda.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const ROUTES: Routes= [
  {
    path: '',
    component: CeldaComponent
  }
]


@NgModule({
  declarations: [
    CeldaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CeldaModule { }
