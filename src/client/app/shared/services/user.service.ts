import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: Http){}
    
    getUsers(){
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getUser(id: number){
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    createUser(user: User){
        return this.http.post('/api/users', user,this.jwt()).map((response: Response) => response.json());
    }

    deleteUser(id: number) {
        return this.http.delete('/api/users' + id, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser && currentUser.token) {
            let headers = new Headers({'Authorization': "Bearer" +  currentUser.token});
            return new RequestOptions({headers: headers});
        }
        return new  RequestOptions({});
    }    
    
}