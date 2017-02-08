import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './../shared/components/guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
