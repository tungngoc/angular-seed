import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from "./components/register/register.component";
import { UserRoutingModule } from './user-route.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from '../shared/services/user.service';
import { AuthenticationService } from '../shared/services/authentication.service';

@NgModule({
  imports: [CommonModule, UserRoutingModule, SharedModule],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent],
  providers: [UserService, AuthenticationService]
})
export class UserModule { }
