import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'form',
    pathMatch : 'full'
  },
  {
    path : 'form',
    loadChildren : () => import('src/app/registration/registration.module').then(m=>m.RegistrationModule)
  },
  {
    path : 'home',
    loadChildren : () => import('src/app/home/home.module').then(m=>m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
