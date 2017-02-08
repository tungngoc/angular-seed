import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/dashboard.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '/login', component: LoginComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
