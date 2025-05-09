import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
},
{
  path: 'dashboard',
  loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
},
{
  path: 'celda',
  loadChildren: () => import('./celda/celda.module').then(m => m.CeldaModule)
},
{
  path: '', redirectTo: 'login', pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
