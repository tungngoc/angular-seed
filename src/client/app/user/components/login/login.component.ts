import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from '../../../shared/services/alert.service';
import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading: any = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService : AlertService,
    ){}

    ngOnInit() {
        this.authenticationService.logOut();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = false;
        this.authenticationService.login(this.model.username, this.model.password)
        .subscribe( data => { this.router.navigate([this.returnUrl])}
                    ,error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
    }
}