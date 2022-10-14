import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login.component';
import { CanActivateTeam } from './services';
import { Weather } from './weather/weather.component';

const routes: Routes = [
  {
    component: Login,
    path: 'login'
  },
  {
    component: Weather,
    path: 'weather',
    canActivate: [CanActivateTeam]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
