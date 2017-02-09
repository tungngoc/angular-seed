import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from "./components/register/register.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
       { path: 'register', component: RegisterComponent }
    ])
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
