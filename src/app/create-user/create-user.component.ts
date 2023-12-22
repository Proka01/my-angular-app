// create-user.component.ts

import { Component } from '@angular/core';
import { ApiCallServiceService } from '../service/apiCallService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  newUser = {
    email: '',
    firstName: '',
    lastName: '',
    permissions: '',
    password: ''
  };

  constructor(private apiCallService: ApiCallServiceService, private router: Router) {}

  createUser(): void {
    this.apiCallService.createUser(this.newUser).subscribe(
      () => {
        console.log('User created successfully');
        // this.router.navigate(['/']); // Navigate back to the user list after creating a user
      },
      (error) => {
        console.error('Error creating user', error);
      }
    );
  }
}
