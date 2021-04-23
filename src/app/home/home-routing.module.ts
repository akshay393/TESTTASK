import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children : [
      {
        path : '', redirectTo : 'user-list', pathMatch : 'full'
      },
      {
        path : 'user-list', 
        loadChildren : ()=>import('src/app/home/user-list/user-list.module').then(m=>m.UserListModule)
      },
      {
        path : 'user-profile',
        loadChildren : ()=>import('src/app/home/user-profile/user-profile.module').then(m=>m.UserProfileModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
