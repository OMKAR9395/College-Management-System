import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  userRole = '';
  username = '';
  password = '';
  roles = ['Admin', 'User', 'Guest'];

    constructor(private router: Router) {}


  login() {
    // Hardcoded check
    if (this.username === 'admin' && this.password === 'admin123' &&  this.userRole === 'Admin') 
    {
     // alert('Login successful!');
     this.router.navigate(['/main']);
    }
     else 
    {
      alert('Invalid credentials or role!');
    }
  }
}
