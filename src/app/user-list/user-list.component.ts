import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallServiceService } from '../service/apiCallService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private apiCallService: ApiCallServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.apiCallService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error loading users', error);
      }
    );
  }

  updateUser(user: any): void {
    this.apiCallService.updateUser(user).subscribe(
      () => {
        console.log('User updated successfully');
      },
      (error) => {
        console.error('Error updating user', error);
      }
    );
  }
}
