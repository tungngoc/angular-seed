import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';


@Component({
  moduleId: module.id,
  templateUrl: 'dashboad.component.html'
})

export class DashboardComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    return this.userService.getUsers().subscribe(users => { this.users = users });
  }
}