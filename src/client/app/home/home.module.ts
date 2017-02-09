import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../shared/services/user.service';
import { AuthGuard } from './../shared/components/guards/auth.guard';


 //fake backend 
import { fakeBackendProvider } from '../shared/helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [UserService, AuthGuard,  ]
})
export class HomeModule { }
