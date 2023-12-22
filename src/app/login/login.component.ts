import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallServiceService } from '../service/apiCallService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiCallService : ApiCallServiceService, private router: Router) {}

  login(): void {
    // Assuming you have a login API that returns a JWT
    const credentials = { email: this.email, password: this.password };

    this.apiCallService.loginUser(credentials).subscribe(
      (response) => {
        // Assuming the JWT is returned in the 'token' property of the response
        const token = response.jwt;
        console.log(token);

        // Save the token in local storage
        localStorage.setItem('jwtToken', token);

        console.log(localStorage.getItem('jwtToken'));

        // Navigate to the UserList page
        //this.router.navigate(['/user-list']);
      },
      (error) => {
        console.error('Login failed', error);
        // Handle login failure (e.g., display an error message)
      }
    );
  }
}
