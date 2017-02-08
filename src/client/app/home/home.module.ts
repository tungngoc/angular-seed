import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../shared/services/user.service';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [UserService]
})
export class HomeModule { }
