import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) {}

    login(userName: string, password: string) {
        
        return this.http.post('/api/authenticate', JSON.stringify({userName: userName, password: password}))
        .map((response: Response) => {
            let user = response.json();
            if(user && user.token){
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        })
        

        /*
        let user: User = new User();
        user.id = 10;
        user.firstName = 'ngoc';
        user.lastName = 'tung';
        user.password = '123';
        user.username = 'a';

        return user;
        */
    }

    logOut(){
        localStorage.removeItem('currentUser');
    }
}