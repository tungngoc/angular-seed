import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../../../shared/services/alert.service';
import { UserService } from '../../../shared/services/user.service';


@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ){}

    register() {
        this.loading = true;
        this.userService.createUser(this.model)
            .subscribe( 
                data => {
                    this.alertService.success("Registration successfull", true);
                    this.router.navigate(['/login'])
                },
                error => {
                    this.alertService.error(error),
                    this.loading = false;
                }
            )
    }
}